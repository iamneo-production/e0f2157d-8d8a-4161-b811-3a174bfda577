package com.examly.springapp.service;

import com.examly.springapp.model.User;
import com.examly.springapp.model.UserDto;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    User findByEmail(String email);

    User save(UserDto userDto);

    List<User> findAll();

    User findOne(String email);

    User getUserByUsername(String email);

}