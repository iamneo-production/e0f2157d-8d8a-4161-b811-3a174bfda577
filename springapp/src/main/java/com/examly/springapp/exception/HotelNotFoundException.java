package com.examly.springapp.exception;

public class HotelNotFoundException extends RuntimeException{
    public HotelNotFoundException(Long id){
        super("could not found the data with id "+id);
    }
}
