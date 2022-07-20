package com.example.tech57.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Absence_Stag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id_absence_stag;
    String date_absence;
    boolean estAbsent;


    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "id_stag", nullable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "absences"})
    Stagiaire stagiaire;




    public Absence_Stag(String date_absence, boolean estAbsent) {
        this.date_absence = date_absence;
        this.estAbsent = estAbsent;
    }
}
