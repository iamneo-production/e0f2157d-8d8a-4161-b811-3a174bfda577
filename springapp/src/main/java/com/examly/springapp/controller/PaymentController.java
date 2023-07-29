package com.examly.springapp.controller;

import com.examly.springapp.model.Payment;
import com.examly.springapp.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings/{bookingId}/payments")
public class PaymentController {

    private final PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @GetMapping
    public List<Payment> getAllPaymentsForBooking(@PathVariable int bookingId) {
        return paymentService.getAllPaymentsForBooking(bookingId);
    }

    @PostMapping
    public Payment createPaymentForBooking(@PathVariable int bookingId, @RequestBody Payment payment) {
        return paymentService.createPaymentForBooking(bookingId, payment);
    }

    @PutMapping("/{paymentId}")
    public Payment updatePaymentForBooking(
            @PathVariable int bookingId, @PathVariable int paymentId, @RequestBody Payment payment) {
        return paymentService.updatePaymentForBooking(bookingId, paymentId, payment);
    }

    @DeleteMapping("/{paymentId}")
    public void deletePaymentForBooking(@PathVariable int bookingId, @PathVariable int paymentId) {
        paymentService.deletePaymentForBooking(bookingId, paymentId);
    }
}