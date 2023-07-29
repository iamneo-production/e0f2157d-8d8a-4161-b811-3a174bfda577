package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import java.time.*;
@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int paymentId;
    private double amount;
    private LocalDateTime paymentDateTime;
    private String paymentStatus;
    @ManyToOne
    @JoinColumn(name="booking_id")
    private Booking booking;

    public Payment() {
        // Default constructor
    }

    public Payment(int paymentId, double amount, LocalDateTime paymentDateTime, String paymentStatus) {
        this.paymentId = paymentId;
        this.amount = amount;
        this.paymentDateTime = paymentDateTime;
        this.paymentStatus = paymentStatus;
    }

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public LocalDateTime getPaymentDateTime() {
        return paymentDateTime;
    }

    public void setPaymentDateTime(LocalDateTime paymentDateTime) {
        this.paymentDateTime = paymentDateTime;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }
}

