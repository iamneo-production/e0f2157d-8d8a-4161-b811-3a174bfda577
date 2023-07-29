package com.examly.springapp.controller;

import com.examly.springapp.config.TokenProvider;
import com.examly.springapp.model.AuthToken;
import com.examly.springapp.model.LoginUser;
import com.examly.springapp.model.User;
import com.examly.springapp.model.UserDto;
import com.examly.springapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenProvider jwtTokenUtil;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> generateToken(@RequestBody LoginUser loginUser) throws AuthenticationException {

        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginUser.getEmail(),
                        loginUser.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        User user = userService.getUserByUsername(userDetails.getUsername());

        final String token = jwtTokenUtil.generateToken(authentication);

        AuthToken authResponse = new AuthToken(token, user, userDetails.getAuthorities());

        return ResponseEntity.ok(authResponse);
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public User saveUser(@RequestBody UserDto user) {
        return userService.save(user);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value = "/adminping", method = RequestMethod.GET)
    public String adminPing() {
        return "Only Admins Can Read This";
    }

    @PreAuthorize("hasRole('USER')")
    @RequestMapping(value = "/userping", method = RequestMethod.GET)
    public String userPing() {
        return "Any User Can Read This";
    }

    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value = "/adminpage", method = RequestMethod.GET)
    public String adminPage() {
        return "Page for Admin";
    }

    @PreAuthorize("hasRole('HOTEL_STAFF')")
    @GetMapping("/hotelpage")
    public String hotelPage() {
        return "Hotel Page";
    }
}