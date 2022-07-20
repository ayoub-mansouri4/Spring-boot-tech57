import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stagiaire } from '../models/stagiaire';
import { Sujet } from '../models/sujet';
import { Encadrant } from '../models/encadrant';
import { Absence_Stag } from '../models/absence_Stag';


@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  public urlServer:string=environment.urlServer

  constructor(public http:HttpClient) { }

  public ajouterStagiaire(stagiaire:Stagiaire):Observable<Stagiaire>{
    return this.http.post<Stagiaire>(`${this.urlServer}/stag/stagiaire`,stagiaire);
  }
  public listerStagiaire():Observable<Stagiaire[]>{
    return this.http.get<Stagiaire[]>(`${this.urlServer}/stag/stagiaire`);
  }

  public ajouterSujet(sujet:Sujet):Observable<Sujet>{
     return this.http.post<Sujet>(`${this.urlServer}/sujets/add`,sujet);
  }
  public affecterSujet(id_stag:number,id_sujet:number):Observable<boolean>{
    return this.http.get<boolean>(`http://localhost:8080/stag/affecterSujet/${id_stag}/${id_sujet}`);
  }
  public listerSujet():Observable<Sujet[]>{
    return this.http.get<Sujet[]>(`${this.urlServer}/sujets`);

  }

  public AjouterEncandrant(encadrant:Encadrant):Observable<Encadrant>{
    return this.http.post<Encadrant>(`${this.urlServer}/stag/ajouterEncadrant`,encadrant);
  }

  public listerEncadrants():Observable<Encadrant[]>{
    return this.http.get<Encadrant[]>(`${this.urlServer}/stag/listerEncadrants`);

  }

  public affecterEncadrant(id_stagiaire:number,id_encadrant:number):Observable<boolean>{
    return this.http.get<boolean>(`http://localhost:8080/stag/affecterEncadrant/${id_stagiaire}/${id_encadrant}`);
  }

  public gererAbsence(absence:Absence_Stag,id_stag:number):Observable<boolean>{
    return this.http.post<boolean>(`${this.urlServer}/stag/absenceStag/${id_stag}`,absence);
  }
  public getStagiaire(id_stag:number):Observable<Stagiaire>{
    return this.http.get<Stagiaire>(`${this.urlServer}/stag/getStagiaire/${id_stag}`)
  }
}
