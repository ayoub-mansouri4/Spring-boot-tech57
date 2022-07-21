import { Formateur } from "./formateur";
import { Participant } from "./participant";

export class Formation{
     id_formation!:number;//numero de formation
    date_formation!:string;
    titre_formation!:string;
    numero_salle!:string;
    description!:string;
    nbr_seance!:number;
    participants!:Participant[];//OnetoMany
    formateur!:Formateur; //OnetoOne
}