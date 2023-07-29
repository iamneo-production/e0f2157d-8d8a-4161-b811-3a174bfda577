package com.examly.springapp.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.examly.springapp.service.*;
import com.examly.springapp.model.*;
import java.util.List;


@RestController
@RequestMapping("/bookings")
public class BookingController {
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/{bookingId}")
    public Booking getBookingById(@PathVariable int bookingId) {
        return bookingService.getBookingById(bookingId);
    }

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.createBooking(booking);
    }

    @PutMapping("/{bookingId}")
    public Booking updateBooking(@PathVariable int bookingId, @RequestBody Booking booking) {
        return bookingService.updateBooking(bookingId, booking);
    }

    @DeleteMapping("/{bookingId}")
    public void deleteBooking(@PathVariable int bookingId) {
        bookingService.deleteBooking(bookingId);
    }

    @GetMapping("/{bookingId}/payments")
    public List<Payment> getAllPaymentsForBooking(@PathVariable int bookingId) {
        return bookingService.getAllPaymentsForBooking(bookingId);
    }

    @PostMapping("/{bookingId}/payments")
    public Payment createPaymentForBooking(@PathVariable int bookingId, @RequestBody Payment payment) {
        return bookingService.createPaymentForBooking(bookingId, payment);
    }

    @PutMapping("/{bookingId}/payments/{paymentId}")
    public Payment updatePaymentForBooking(
            @PathVariable int bookingId, @PathVariable int paymentId, @RequestBody Payment payment) {
        return bookingService.updatePaymentForBooking(bookingId, paymentId, payment);
    }

    @DeleteMapping("/{bookingId}/payments/{paymentId}")
    public void deletePaymentForBooking(@PathVariable int bookingId, @PathVariable int paymentId) {
        bookingService.deletePaymentForBooking(bookingId, paymentId);
    }

    @GetMapping("/{bookingId}/cancellations")
    public List<Cancellation> getAllCancellationsForBooking(@PathVariable int bookingId) {
        return bookingService.getAllCancellationsForBooking(bookingId);
    }

    @PostMapping("/{bookingId}/cancellations")
    public Cancellation createCancellationForBooking(
            @PathVariable int bookingId, @RequestBody Cancellation cancellation) {
        return bookingService.createCancellationForBooking(bookingId, cancellation);
    }

    @PutMapping("/{bookingId}/cancellations/{cancellationId}")
    public Cancellation updateCancellationForBooking(
            @PathVariable int bookingId, @PathVariable int cancellationId, @RequestBody Cancellation cancellation) {
        return bookingService.updateCancellationForBooking(bookingId, cancellationId, cancellation);
    }

    @DeleteMapping("/{bookingId}/cancellations/{cancellationId}")
    public void deleteCancellationForBooking(@PathVariable int bookingId, @PathVariable int cancellationId) {
        bookingService.deleteCancellationForBooking(bookingId, cancellationId);
    }
}
