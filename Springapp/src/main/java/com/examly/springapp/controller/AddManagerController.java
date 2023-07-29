package com.examly.springapp.controller;

import com.examly.springapp.exception.ManagerNotFoundException;
import com.examly.springapp.model.AddManager;
import com.examly.springapp.repository.AddManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class AddManagerController {
    @Autowired
    private AddManagerRepository addManagerRepository;
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/manager")
    AddManager newAddManager(@RequestBody AddManager newAddManager){
        return addManagerRepository.save(newAddManager);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/managers")
    List<AddManager> getAllManagers(){
        return addManagerRepository.findAll();
    }
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/manager/{id}")
    AddManager getAddManagerById(@PathVariable Long id){
        return addManagerRepository.findById(id)
                .orElseThrow(()-> new ManagerNotFoundException(id));
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/manager/{id}")
    AddManager updateAddManager(@RequestBody AddManager newAddManager,@PathVariable Long id){
        return  addManagerRepository.findById(id)
                .map(addManager -> {
                    addManager.setFirstName(newAddManager.getFirstName());
                    addManager.setLastName(newAddManager.getLastName());
                    addManager.setGender(newAddManager.getGender());
                    addManager.setAge(newAddManager.getAge());
                    addManager.setContactNumber(newAddManager.getContactNumber());
                    addManager.setManagerEmailId(newAddManager.getManagerEmailId());
                    addManager.setAddress(newAddManager.getAddress());
                    return addManagerRepository.save(addManager);
                }).orElseThrow(()->new ManagerNotFoundException(id));
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/manager/{id}")
    String deleteAddManager(@PathVariable Long id){
        if(!addManagerRepository.existsById(id)){
            throw new ManagerNotFoundException(id);
        }
        addManagerRepository.deleteById(id);
        return  "Manager with id "+id+" deleted successfully.";
    }
}

