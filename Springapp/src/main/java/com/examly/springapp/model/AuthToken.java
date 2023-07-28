package com.examly.springapp.model;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

public class AuthToken {

    private String token;
    private User user;
    private Collection<? extends GrantedAuthority> authorities;

    public AuthToken(String token, User user, Collection<? extends GrantedAuthority> authorities) {
        this.token = token;
        this.user = user;
        this.authorities = authorities;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }

}