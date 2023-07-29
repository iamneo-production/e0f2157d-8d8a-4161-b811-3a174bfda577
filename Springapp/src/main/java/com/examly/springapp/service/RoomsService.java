package com.examly.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Rooms;
import com.examly.springapp.repository.RoomDao;
import com.examly.springapp.exception.ManagerNotFoundException;
import com.examly.springapp.model.FilterModel;

@Service
public class RoomsService implements RoomServiceInterface {

    @Autowired
    private RoomDao crudRepo;

    @Override
    public Rooms addRoom(Rooms room) {
        String imageLink = room.getImage();
        room.setImage(imageLink);
        Rooms savedRoom = crudRepo.save(room);
        return savedRoom;

    }

    @Override
    public List<Rooms> getAllRooms() {
        return crudRepo.findAll();
    }

    @Override
    public List<Rooms> GetFilteredRooms(FilterModel payload) {
        return crudRepo.GetFilteredRooms(payload.location, payload.roomType);
    }

    @Override
    public Rooms getRoomById(Long roomidL) {
        return crudRepo.findById(roomidL).get();
    }

    @Override
    public void deleteRoomById(Long roomidL) {
        crudRepo.deleteById(roomidL);
    }

}
