package com.examly.springapp.exception;

public class ManagerNotFoundException extends RuntimeException{
    public ManagerNotFoundException(Long id){
        super("could not found the data with id "+id);
    }
}
