package com.examly.springapp.service;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Payment;
import com.examly.springapp.model.Booking;
import com.examly.springapp.repository.PaymentRepo;
import com.examly.springapp.repository.BookingRepo;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepo paymentRepo;

    public Payment addPayment(Payment payment) {
        return paymentRepo.save(payment);
    }
}
