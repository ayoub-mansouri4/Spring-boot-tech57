import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/models/stagiaire';
import { Sujet } from 'src/app/models/sujet';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-affecter-sujet',
  templateUrl: './affecter-sujet.component.html',
  styleUrls: ['./affecter-sujet.component.css']
})
export class AffecterSujetComponent implements OnInit {
  id_stag!:number;
  id_sujet!:number;
  succes!:boolean;

  public liste_Stagiaires!:Stagiaire[];
  public liste_Sujets!:Sujet[];


  constructor(private stagiaireService:StagiaireService) { }

  ngOnInit(): void {
    this.stagiaireService.listerStagiaire().subscribe(
      (resp:Stagiaire[])=>{
        console.log(resp)
        this.liste_Stagiaires=resp;
      },
      (err:HttpErrorResponse)=>{console.log(err)}
    )

    this.stagiaireService.listerSujet().subscribe(
      (resp:Sujet[])=>{ 
        console.log(resp)
        this.liste_Sujets=resp;
      
      },
      (err:HttpErrorResponse)=>{console.log(err)}
    )
  }

  affecter():void{
    console.log(this.id_stag+" "+this.id_sujet)

       this.stagiaireService.affecterSujet(this.id_stag,this.id_sujet).subscribe(
        (resp:boolean)=>{console.log(resp)
          this.succes=resp;

        },
        (err:HttpErrorResponse)=>{console.log(err)}
       )
  }


  }

  