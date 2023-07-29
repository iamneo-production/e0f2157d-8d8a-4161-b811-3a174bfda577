package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AddHotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String hotelName;
    private String hotelAddress;
    private String hotelLocation;
    private String hotelEmail;
    private String hotelContactNumber;
    private String hotelManager;
    private Integer totalRooms;
    private String image1;
    private String image2;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public String getHotelAddress() {
        return hotelAddress;
    }

    public void setHotelAddress(String hotelAddress) {
        this.hotelAddress = hotelAddress;
    }

    public String getHotelLocation() {
        return hotelLocation;
    }

    public void setHotelLocation(String hotelLocation) {
        this.hotelLocation = hotelLocation;
    }

    public String getHotelEmail() {
        return hotelEmail;
    }

    public void setHotelEmail(String hotelEmail) {
        this.hotelEmail = hotelEmail;
    }

    public String getHotelContactNumber() {
        return hotelContactNumber;
    }

    public void setHotelContactNumber(String hotelContactNumber) {
        this.hotelContactNumber = hotelContactNumber;
    }

    public String getHotelManager() {
        return hotelManager;
    }

    public void setHotelManager(String hotelManager) {
        this.hotelManager = hotelManager;
    }

    public Integer getTotalRooms() {
        return totalRooms;
    }

    public void setTotalRooms(Integer totalRooms) {
        this.totalRooms = totalRooms;
    }

    public String getImage1() {
        return image1;
    }

    public void setImage1(String image1) {
        this.image1 = image1;
    }

    public String getImage2() {
        return image2;
    }

    public void setImage2(String image2) {
        this.image2 = image2;
    }
}
