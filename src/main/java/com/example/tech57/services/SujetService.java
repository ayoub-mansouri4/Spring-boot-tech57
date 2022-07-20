package com.example.tech57.services;

import com.example.tech57.models.Sujet;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;


//@Service
public interface SujetService {
    public Sujet save(Sujet sujet);

    public List<Sujet> getAll();
}
