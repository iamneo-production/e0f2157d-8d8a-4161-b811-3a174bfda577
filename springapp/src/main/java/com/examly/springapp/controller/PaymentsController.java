package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.Payments;
import com.examly.springapp.service.PaymentsService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/bookings")
public class PaymentsController {

    private final PaymentsService paymentService;

    @Autowired
    public PaymentsController(PaymentsService paymentService) {
        this.paymentService = paymentService;
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping("/payments")
    public ResponseEntity<Payments> createPayment(@RequestBody Payments payment) {
        Payments createdPayment = paymentService.createPayment(payment);
        return new ResponseEntity<>(createdPayment, HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{paymentId}")
    public ResponseEntity<Payments> getPaymentById(@PathVariable int paymentId) {
        Optional<Payments> payment = paymentService.getPaymentById(paymentId);
        return payment.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public ResponseEntity<List<Payments>> getAllPayments() {
        List<Payments> payments = paymentService.getAllPayments();
        return new ResponseEntity<>(payments, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('USER')")
    @PutMapping("/{paymentId}")
    public ResponseEntity<Payments> updatePayment(@PathVariable int paymentId, @RequestBody Payments payment) {
        Optional<Payments> existingPayment = paymentService.getPaymentById(paymentId);
        if (existingPayment.isPresent()) {
            payment.setPaymentId(paymentId);
            Payments updatedPayment = paymentService.updatePayment(payment);
            return new ResponseEntity<>(updatedPayment, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PreAuthorize("hasRole('USER')")
    @DeleteMapping("/{paymentId}")
    public ResponseEntity<Void> deletePayment(@PathVariable int paymentId) {
        Optional<Payments> existingPayment = paymentService.getPaymentById(paymentId);
        if (existingPayment.isPresent()) {
            paymentService.deletePayment(paymentId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}