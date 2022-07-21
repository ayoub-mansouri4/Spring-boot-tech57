import { Formation } from "./formation";
import { Participant } from "./participant";

export class Absence_participant{
   id_absence_participant!:number;
   date_absence!:string;
   numero_seance!:number;
   estAbsent!:boolean;
   participant!:Participant;//ManyToOne
   formation!:Formation;//OnetoOne
}