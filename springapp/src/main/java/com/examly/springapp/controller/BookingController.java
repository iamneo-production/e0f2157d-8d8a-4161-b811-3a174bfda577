package com.examly.springapp.controller;

import java.util.List;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import com.examly.springapp.model.Booking;
import com.examly.springapp.model.Payment;
import com.examly.springapp.service.BookingService;
import com.examly.springapp.service.PaymentService;


@RestController
public class BookingController {

    private BookingService bookingService;
    private PaymentService paymentService;
    @Autowired
    public BookingController(BookingService bookingService, PaymentService paymentService){
        this.bookingService = bookingService;
        this.paymentService = paymentService;
    }

    @PostMapping("/bookings")
    public Booking addBooking(@RequestBody Booking booking) {
        return this.bookingService.addBooking(booking);
    }

    @GetMapping("/bookings")
    public List<Booking> getBookings() {
        return this.bookingService.getAllBookings();
    }

    @DeleteMapping("/bookings/{booking_id}")
    public void deleteBooking(@PathVariable String booking_id) {
        this.bookingService.deleteBooking(Integer.parseInt(booking_id));
    }
    @PutMapping("/bookings/{booking_id}")
    public Booking updateBooking(@PathVariable("booking_id") int booking_id, @RequestBody Booking updatedBooking) {
        return this.bookingService.updateBooking(booking_id, updatedBooking);
    }
    @PostMapping("bookings/{bookingId}/payments")
    public ResponseEntity<Payment> addPaymentToBooking(
            @PathVariable("bookingId") int bookingId,
            @RequestBody Payment payment) {
        try {
            Payment addedPayment = bookingService.addPaymentToBooking(bookingId, payment);
            return ResponseEntity.ok(addedPayment);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }

    
}
