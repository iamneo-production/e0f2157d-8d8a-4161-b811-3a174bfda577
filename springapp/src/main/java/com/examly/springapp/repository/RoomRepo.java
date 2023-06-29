package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Room;

@Repository
public interface RoomRepo extends JpaRepository<Room, Integer> {

}
