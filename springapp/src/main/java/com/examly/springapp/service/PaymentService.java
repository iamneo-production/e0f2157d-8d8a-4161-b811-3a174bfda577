package com.examly.springapp.service;

import com.examly.springapp.model.Payment;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PaymentService {
    List<Payment> getAllPaymentsForBooking(int bookingId);

    Payment createPaymentForBooking(int bookingId, Payment payment);

    Payment updatePaymentForBooking(int bookingId, int paymentId, Payment payment);

    void deletePaymentForBooking(int bookingId, int paymentId);
}