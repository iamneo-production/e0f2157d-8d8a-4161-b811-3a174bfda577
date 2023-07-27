package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.Payments;

public interface PaymentsRepository extends JpaRepository<Payments, Integer> {

}