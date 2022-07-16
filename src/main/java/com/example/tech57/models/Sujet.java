package com.example.tech57.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "sujet")
public class Sujet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_sujet;

    private String titre_sujet;

    private String description_sujet;


    public Sujet(String titre_sujet, String description_sujet) {
        this.titre_sujet = titre_sujet;
        this.description_sujet = description_sujet;
    }


}
