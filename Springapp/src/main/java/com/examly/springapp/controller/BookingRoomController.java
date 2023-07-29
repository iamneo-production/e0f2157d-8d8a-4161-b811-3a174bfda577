package com.examly.springapp.controller;

import com.examly.springapp.model.BookingRoom;
import com.examly.springapp.repository.BookingRoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/bookings")
@CrossOrigin("*")
public class BookingRoomController {

    private final BookingRoomRepository bookingRepository;

    @Autowired
    public BookingRoomController(BookingRoomRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping
    BookingRoom newBooking(@RequestBody BookingRoom newBooking) {
        return bookingRepository.save(newBooking);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<BookingRoom> getAllBookings() {
        return bookingRepository.findAll();
    }

    @PreAuthorize("hasRole('HOTEL_STAFF')")
    @PutMapping("/{id}/status")
    public ResponseEntity<String> updateBookingStatus(@PathVariable("id") Long id,
            @RequestParam("status") String status) {
        Optional<BookingRoom> optionalBooking = bookingRepository.findById(id);
        if (optionalBooking.isPresent()) {
            BookingRoom booking = optionalBooking.get();
            booking.setBookingStatus(status);
            bookingRepository.save(booking);
            return ResponseEntity.ok("Booking status updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
