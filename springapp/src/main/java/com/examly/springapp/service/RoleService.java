package com.examly.springapp.service;

import com.examly.springapp.model.Role;

public interface RoleService {
    Role findByName(String name);
}