package com.examly.springapp.repository;

import com.examly.springapp.model.AddHotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddHotelRepository extends JpaRepository<AddHotel, Long> {
}
