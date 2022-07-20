package com.example.tech57.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "sujet")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Sujet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_sujet;

    private String titre_sujet;

    private String description_sujet;

//    public Sujet() {
//    }
//
//    public Sujet(Long id_sujet, String titre_sujet, String description_sujet) {
//        this.id_sujet = id_sujet;
//        this.titre_sujet = titre_sujet;
//        this.description_sujet = description_sujet;
//    }
//
//    public Long getId_sujet() {
//        return id_sujet;
//    }
//
//    public void setId_sujet(Long id_sujet) {
//        this.id_sujet = id_sujet;
//    }
//
//    public String getTitre_sujet() {
//        return titre_sujet;
//    }
//
//    public void setTitre_sujet(String titre_sujet) {
//        this.titre_sujet = titre_sujet;
//    }
//
//    public String getDescription_sujet() {
//        return description_sujet;
//    }
//
//    public void setDescription_sujet(String description_sujet) {
//        this.description_sujet = description_sujet;
//    }
//
//    @Override
//    public String toString() {
//        return "Sujet{" +
//                "id_sujet=" + id_sujet +
//                ", titre_sujet='" + titre_sujet + '\'' +
//                ", description_sujet='" + description_sujet + '\'' +
//                '}';
//    }
}
