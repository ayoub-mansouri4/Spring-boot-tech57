package com.example.tech57.services;

import com.example.tech57.models.Absence_Stag;

public interface StagiaireService {
    public Absence_Stag ajouterAbsence(Absence_Stag absence_stag,Long id_stag);
    public boolean affecterSujet(Long id_sujet,Long id_stag);
}
