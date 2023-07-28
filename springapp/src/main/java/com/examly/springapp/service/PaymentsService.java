package com.examly.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Payments;
import com.examly.springapp.repository.PaymentsRepository;

import java.util.List;
import java.util.Optional;

@Service

public class PaymentsService {
    private final PaymentsRepository paymentRepository;

    @Autowired
    public PaymentsService(PaymentsRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    public Payments createPayment(Payments payment) {
        return paymentRepository.save(payment);
    }

    public Optional<Payments> getPaymentById(int paymentId) {
        return paymentRepository.findById(paymentId);
    }

    public List<Payments> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Payments updatePayment(Payments payment) {
        return paymentRepository.save(payment);
    }

    public void deletePayment(int paymentId) {
        paymentRepository.deleteById(paymentId);
    }
}