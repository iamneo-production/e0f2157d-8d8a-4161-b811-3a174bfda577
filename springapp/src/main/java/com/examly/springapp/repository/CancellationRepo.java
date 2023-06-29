package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Cancellation;

@Repository
public interface CancellationRepo extends JpaRepository<Cancellation, Integer> {

}
