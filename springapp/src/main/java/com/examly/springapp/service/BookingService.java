package com.examly.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;
import com.examly.springapp.model.Booking;
import com.examly.springapp.repository.BookingRepo;

@Service
public class BookingService {
    @Autowired
    private BookingRepo bookingRepo;

    public Booking addBooking(Booking booking) {

        return bookingRepo.save(booking);
    }

    public List<Booking> getAllBookings() {
        List<Booking> bookings = bookingRepo.findAll();
        return bookings;
    }

    public ResponseEntity<String> deleteBooking(int id) {
        Booking booking = bookingRepo.findById(id).orElse(null);
        if (booking != null) {
            bookingRepo.delete(booking);
            String responseMessage = "Booking deleted successfully";
            System.out.println(responseMessage); 
            return ResponseEntity.ok(responseMessage);
        } else {
            String errorMessage = "Booking not found";
            System.out.println(errorMessage); 
            return ResponseEntity.notFound().build();
        }
    }

}
