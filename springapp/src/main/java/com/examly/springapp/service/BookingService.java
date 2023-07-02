package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;
import com.examly.springapp.model.Booking;
import com.examly.springapp.model.Payment;
import com.examly.springapp.repository.BookingRepo;
import com.examly.springapp.service.PaymentService;


@Service
public class BookingService {
    @Autowired
    private BookingRepo bookingRepo;
    @Autowired
    private PaymentService paymentService;
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

    public Payment addPaymentToBooking(int bookingId, Payment payment) {
        Optional<Booking> optionalBooking = bookingRepo.findById(bookingId);
        if (optionalBooking.isPresent()) {
            Booking booking = optionalBooking.get();
            payment.setBooking(booking);
            Payment addedPayment = paymentService.addPayment(payment);
            booking.getPayment().add(addedPayment);
            bookingRepo.save(booking);
            return addedPayment;
        } else {
            throw new IllegalArgumentException("Booking not found");
        }
    }
    
}
