import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Absence_participant } from '../models/absence_participant';
import { Absence_Stag } from '../models/absence_Stag';
import { Formateur } from '../models/formateur';
import { Formation } from '../models/formation';
import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  public urlServer:string=environment.urlServer


  constructor(private http:HttpClient) { }

  public ajouterFormation(formation:Formation):Observable<Formation>{
    return this.http.post<Formation>(`${this.urlServer}/`,formation);
  }
  public consulterFormation():Observable<Formation[]>{
    return this.http.get<Formation[]>(`${this.urlServer}/`);
  }

  public ajouterParticipant(id_formation:number,participant:Participant):Observable<Participant>{
    return this.http.post<Participant>(`${this.urlServer}/.../${id_formation}`,participant);
  }
  public consulterParticipant(id_formation:number):Observable<Participant[]>{
    return this.http.get<Participant[]>(`${this.urlServer}/.../${id_formation}`);
  }
  public ajouterFormateur(id_formation:number,formateur:Formateur):Observable<Formateur>{
    return this.http.post<Formateur>(`${this.urlServer}/.../${id_formation}`,formateur);
  }
  public consulterFormateurs():Observable<Formateur[]>{
    return this.http.get<Formateur[]>(`${this.urlServer}/`);
  }

  public gererAbsence(id_formation:number,id_participant:number,absence_participant:Absence_participant):Observable<Absence_participant>{
    return this.http.post<Absence_participant>(`${this.urlServer}/.../${id_formation}/${id_participant}`,absence_participant);
  }
}
