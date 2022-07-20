import { Absence_Stag } from "./absence_Stag";
import { Encadrant } from "./encadrant";
import { Sujet } from "./sujet";

export class Stagiaire{
    id_stag!:number;
    date_depot_dossier!:string;
    nom_stag!:string;
    prenom_stag!:string;
    cin_stag!:string;
    email_stag!:string;
    tel_stag!:string;
    etablissement!:string;
    specialite!:string;
    duree_stag!:string;
    type_stag!:string;
    etat_dossier!:string;
    sujet!:Sujet;
    encadrant!:Encadrant;
    absences!:Absence_Stag[];    
}