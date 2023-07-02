package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;
import com.examly.springapp.model.Booking;
import com.examly.springapp.model.Payment;
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
    public Booking updateBooking(int booking_id, Booking booking){
        Optional<Booking> bookingOptional = bookingRepo.findById(booking_id);
        if(bookingOptional.isPresent()){
            Booking existingBooking = bookingOptional.get();
            existingBooking.setCustomer(booking.getCustomer());
            existingBooking.setCheckInDate(booking.getCheckInDate());
            existingBooking.setCheckOutDate(booking.getCheckOutDate());
            existingBooking.setRoom(booking.getRoom());
            existingBooking.setPayment(booking.getPayment());
            existingBooking.setCancellation(booking.getCancellation());
            return bookingRepo.save(existingBooking);
        }
        else{
            return booking;
        }
    }
    public Booking addPaymentToBooking(int bookingId, Payment payment) {
        Optional<Booking> bookingOptional = bookingRepo.findById(bookingId);
        if (bookingOptional.isPresent()) {
            Booking booking = bookingOptional.get();
            List<Payment> payments = booking.getPayment();
            payments.add(payment);
            booking.setPayment(payments);
            return bookingRepo.save(booking);
        } else {
            return null;
        }
    }
}
