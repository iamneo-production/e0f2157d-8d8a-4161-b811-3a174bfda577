package com.examly.springapp.repository;

import com.examly.springapp.model.AddManager;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddManagerRepository extends JpaRepository<AddManager, Long> {
}