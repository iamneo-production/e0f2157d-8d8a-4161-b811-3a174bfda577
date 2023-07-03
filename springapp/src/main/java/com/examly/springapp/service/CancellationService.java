package com.examly.springapp.service;

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Cancellation;
import com.examly.springapp.repository.CancellationRepo;

@Service
public class CancellationService {
    private CancellationRepo cancellationRepo;

    public Cancellation addCancellation(Cancellation cancellation) {
        return cancellationRepo.save(cancellation);
    }
}