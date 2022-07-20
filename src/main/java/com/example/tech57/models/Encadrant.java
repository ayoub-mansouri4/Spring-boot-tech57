package com.example.tech57.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "encadrant")
public class Encadrant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id_encadrant; //num
    String nom_encadrant;
    String prenom_encadrant;
    String email_encadrant;

    public Encadrant(String nom_encadrant, String prenom_encadrant, String email_encadrant) {
        this.nom_encadrant = nom_encadrant;
        this.prenom_encadrant = prenom_encadrant;
        this.email_encadrant = email_encadrant;
    }
}
