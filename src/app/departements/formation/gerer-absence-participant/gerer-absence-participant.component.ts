import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Absence_participant } from 'src/app/models/absence_participant';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-gerer-absence-participant',
  templateUrl: './gerer-absence-participant.component.html',
  styleUrls: ['./gerer-absence-participant.component.css']
})
export class GererAbsenceParticipantComponent implements OnInit {
  absence_participant:Absence_participant=new Absence_participant();
  participants!:Participant[];
  id_participant!:number;
  id_formation!:number;
  isDone!:boolean;
  formations!:Formation[];

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

  chercher():void{
    this.formationService.consulterParticipant(this.id_formation).subscribe(
      (resp:Participant[])=>{
        console.log(resp)
        this.participants=resp;
      },
      (err:HttpErrorResponse)=>{console.log(err)}
    )
  }

  ajouter():void{
    this.formationService.gererAbsence(this.id_formation,this.id_participant,this.absence_participant).subscribe(
      (resp:Absence_participant)=>{
        console.log(resp)
      },
      (err:HttpErrorResponse)=>{console.log(err)}

    )

  }


}
