import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Encadrant } from 'src/app/models/encadrant';
import { Stagiaire } from 'src/app/models/stagiaire';
import { Sujet } from 'src/app/models/sujet';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-consulter-stagiaire',
  templateUrl: './consulter-stagiaire.component.html',
  styleUrls: ['./consulter-stagiaire.component.css']
})
export class ConsulterStagiaireComponent implements OnInit {
  public liste_Stagiaires!:Stagiaire[];
  public default_sujet:Sujet=new Sujet();
  public  default_encadrant:Encadrant=new Encadrant();


  constructor(private stagiaireService:StagiaireService) { }

  ngOnInit(): void {
   

    this.stagiaireService.listerStagiaire().subscribe(
      (resp:Stagiaire[])=>{
        console.log(resp)
        this.liste_Stagiaires=resp;
      },
      (err:HttpErrorResponse)=>{console.log(err)}
    )



  }

}
