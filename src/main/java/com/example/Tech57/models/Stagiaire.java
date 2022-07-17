package com.example.Tech57.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "Stagiaire")
@NoArgsConstructor
@AllArgsConstructor
public class Stagiaire implements Serializable {
    @Id

    @GeneratedValue
    Long id;
    String date_depo_dossier;
    String nom_stag;
    String prenom_stag;
    String cin_stag;
    String email_stag;
    String tel_stag;
    String etablissement;
    String specialite;
    String duree_stag;
    String type_stag;
    Boolean etat_dossier;
    @ManyToOne
    @JoinColumn(name = "id_sujet")
    Sujet  Sujet;
    @OneToOne
    @JoinColumn(name = "id_encadrant")
    Encadrant encadrant ;
    //@OneToMany(mappedBy = "stagiaire",fetch = FetchType.LAZY,orphanRemoval = true)
    @JsonIgnoreProperties("stagiaire")




    public Stagiaire(String nom_stag, String prenom_stag) {
        this.nom_stag = nom_stag;
        this.prenom_stag = prenom_stag;
    }

}
