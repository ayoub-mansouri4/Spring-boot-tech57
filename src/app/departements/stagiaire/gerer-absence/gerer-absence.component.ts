import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Absence_Stag } from 'src/app/models/absence_Stag';
import { Stagiaire } from 'src/app/models/stagiaire';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-gerer-absence',
  templateUrl: './gerer-absence.component.html',
  styleUrls: ['./gerer-absence.component.css']
})
export class GererAbsenceComponent implements OnInit {
  absence_stag:Absence_Stag=new Absence_Stag()
  id_stag!:number;
  public liste_Stagiaires!:Stagiaire[];
  succes!:boolean;


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

  submit():void{
   this.stagiaireService.gererAbsence(this.absence_stag,this.id_stag).subscribe(
    (resp:boolean)=>{
      console.log(resp)
      this.succes=true
    },
    (err:HttpErrorResponse)=>{
      console.log(err)
    }
   )
  }

}
