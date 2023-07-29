package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.examly.springapp.model.Rooms;
import com.examly.springapp.repository.RoomDao;
import com.examly.springapp.exception.ManagerNotFoundException;
import com.examly.springapp.exception.RoomNotFoundException;
import com.examly.springapp.model.AddManager;
import com.examly.springapp.model.FilterModel;
import com.examly.springapp.service.RoomServiceInterface;

@RestController
@RequestMapping("/rooms")
@CrossOrigin("*")
public class RoomsController {

    @Autowired
    private RoomServiceInterface roomServiceInterface;
    @Autowired
    private RoomDao crudRepo;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/saveroom")
    public ResponseEntity<Rooms> addRoom(@RequestBody Rooms room) {
        Rooms roomSaved = roomServiceInterface.addRoom(room);
        return new ResponseEntity<Rooms>(roomSaved, HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/all")
    public ResponseEntity<List<Rooms>> getAllRooms() {

        List<Rooms> listOfAllRooms = roomServiceInterface.getAllRooms();
        return new ResponseEntity<List<Rooms>>(listOfAllRooms, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/emp/{empid}")
    public ResponseEntity<Rooms> getRoomById(@PathVariable("empid") Long roomidL) {

        Rooms roomRetrieved = roomServiceInterface.getRoomById(roomidL);
        return new ResponseEntity<Rooms>(roomRetrieved, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{empid}")
    public ResponseEntity<Void> deleteRoomById(@PathVariable("empid") Long roomidL) {

        roomServiceInterface.deleteRoomById(roomidL);
        return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{empid}")
    public Rooms updateRoom(@RequestBody Rooms room, @PathVariable String empid) {
        return crudRepo.findById(Long.parseLong(empid))
                .map(r -> {
                    r.setTitle(room.getTitle());
                    r.setAddress(room.getAddress());
                    r.setCost(room.getCost());
                    r.setId(room.getId());
                    r.setImage(room.getImage());
                    r.setLocation(room.getLocation());
                    r.setRating(room.getRating());
                    r.setRoomType(room.getRoomType());
                    return crudRepo.save(r);
                })
                .orElseThrow(() -> new RoomNotFoundException(Long.parseLong(empid)));
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping("/GetFilteredRooms")
    public ResponseEntity<List<Rooms>> GetFilteredRooms(@RequestBody FilterModel payload) {
        List<Rooms> listOfAllRooms = roomServiceInterface.GetFilteredRooms(payload);
        return new ResponseEntity<List<Rooms>>(listOfAllRooms, HttpStatus.OK);
    }

}
