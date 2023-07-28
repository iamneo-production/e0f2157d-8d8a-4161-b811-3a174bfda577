package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.FilterModel;
import com.examly.springapp.model.Rooms;

public interface RoomServiceInterface {
    public Rooms addRoom(Rooms room);

    public List<Rooms> getAllRooms();

    public List<Rooms> GetFilteredRooms(FilterModel payload);

    public Rooms getRoomById(Long roomidL);

    public void deleteRoomById(Long roomidL);

}
