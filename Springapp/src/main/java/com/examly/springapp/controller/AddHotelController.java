package com.examly.springapp.controller;

import com.examly.springapp.exception.HotelNotFoundException;
import com.examly.springapp.model.AddHotel;
import com.examly.springapp.repository.AddHotelRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class AddHotelController {
    @Autowired
    private AddHotelRepository addHotelRepository;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/hotel")
    AddHotel newAddHotel(@RequestBody AddHotel newAddHotel){
        return addHotelRepository.save(newAddHotel);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/hotels")
    List<AddHotel> getAllHotels(){
        return addHotelRepository.findAll();
    }
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/hotel/{id}")
    AddHotel getAddHotelById(@PathVariable Long id){
        return addHotelRepository.findById(id)
                .orElseThrow(()-> new HotelNotFoundException(id));
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/hotel/{id}")
    AddHotel updateAddHotel(@RequestBody AddHotel newAddHotel,@PathVariable Long id){
        return  addHotelRepository.findById(id)
                .map(addHotel -> {
                    addHotel.setHotelName(newAddHotel.getHotelName());
                    addHotel.setHotelAddress(newAddHotel.getHotelAddress());
                    addHotel.setHotelLocation(newAddHotel.getHotelLocation());
                    addHotel.setHotelEmail(newAddHotel.getHotelEmail());
                    addHotel.setHotelContactNumber(newAddHotel.getHotelContactNumber());
                    addHotel.setHotelManager(newAddHotel.getHotelManager());
                    addHotel.setTotalRooms(newAddHotel.getTotalRooms());
                    addHotel.setImage1(newAddHotel.getImage1());
                    addHotel.setImage2(newAddHotel.getImage2());
                    return addHotelRepository.save(addHotel);
                }).orElseThrow(()->new HotelNotFoundException(id));
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/hotel/{id}")
    String deleteAddHotel(@PathVariable Long id){
        if(!addHotelRepository.existsById(id)){
            throw new HotelNotFoundException(id);
        }
        addHotelRepository.deleteById(id);
        return  "Hotel with id "+id+" deleted successfully.";
    }

}


