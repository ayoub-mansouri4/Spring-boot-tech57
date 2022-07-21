import { Absence_participant } from "./absence_participant";
import { Formation } from "./formation";

export class Participant{
     id_participant!:number; 
     nom_participant!:string;
     prenom_participant!:string;
     numero_participant!:string;
     formation!:Formation;
     absences_participant!:Absence_participant[];
}