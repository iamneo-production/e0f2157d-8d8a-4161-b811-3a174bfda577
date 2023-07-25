package com.examly.springapp.repository;

import com.examly.springapp.model.BookingRoom;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRoomRepository extends JpaRepository<BookingRoom, Long> {
}
