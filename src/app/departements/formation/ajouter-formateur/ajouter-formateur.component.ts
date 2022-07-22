import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-ajouter-formateur',
  templateUrl: './ajouter-formateur.component.html',
  styleUrls: ['./ajouter-formateur.component.css']
})
export class AjouterFormateurComponent implements OnInit {
  formations!:Formation[];
  formateur:Formateur=new Formateur();
  id_formation!:number;
  isDone!:boolean;

  constructor(public router:Router,public formationService:FormationService) { }

  ngOnInit(): void {
    this.formationService.consulterFormation().subscribe(
      (resp:Formation[])=>{
        console.log(resp);
        this.formations=resp
      },
      (err:HttpErrorResponse)=>{console.log(err)}
    )
  }
   public ajouter():void{
    this.formationService.ajouterFormateur(this.id_formation,this.formateur).subscribe(
      (resp:Formateur)=>{console.log(resp)
        this.isDone=true
      },
      (err:HttpErrorResponse)=>console.log(err)
    )
   }

}
