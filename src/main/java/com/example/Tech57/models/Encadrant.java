package com.example.Tech57.models;

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
    String nom_E;
    String prenom_E;
    String email_E;

    public Encadrant(String nom_E, String prenom_E, String email_E) {
        this.nom_E = nom_E;
        this.prenom_E = prenom_E;
        this.email_E = email_E;
    }
}
