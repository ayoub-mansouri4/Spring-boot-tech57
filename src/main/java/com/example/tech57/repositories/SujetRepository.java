package com.example.tech57.repositories;

import com.example.tech57.models.Sujet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SujetRepository extends JpaRepository<Sujet,Long> {
}
