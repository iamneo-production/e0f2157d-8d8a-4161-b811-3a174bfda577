package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {

}