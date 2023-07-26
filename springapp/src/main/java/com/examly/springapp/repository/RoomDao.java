package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Rooms;

@Repository
public interface RoomDao extends JpaRepository<Rooms, Long> {

        @Query(value = "SELECT * FROM Room R WHERE LOWER(R.location) LIKE :location AND (:roomType = '' OR R.room_type = :roomType)\r\n"
                        + //
                        "", nativeQuery = true)
        public List<Rooms> GetFilteredRooms(
                        @Param("location") String location,
                        @Param("roomType") String roomType);

}
