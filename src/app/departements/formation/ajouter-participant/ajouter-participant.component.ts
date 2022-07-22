import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-ajouter-participant',
  templateUrl: './ajouter-participant.component.html',
  styleUrls: ['./ajouter-participant.component.css']
})
export class AjouterParticipantComponent implements OnInit {
  participant:Participant=new Participant();
  formations!:Formation[];
  id_formation!:number;

  isDone!:boolean;

  constructor(public router:Router,public formationService:FormationService) { }

  ngOnInit(): void {
    this.formationService.consulterFormation().subscribe(
      (resp:Formation[])=>{
        console.log(resp)
        this.formations=resp;
        this.isDone=true
      },
      (err:HttpErrorResponse)=>{console.log(err)}
    )
  }

  ajouter():void{
    this.formationService.ajouterParticipant(this.id_formation,this.participant).subscribe(
      (resp:Participant)=>{
        console.log(resp)
      },
      (err:HttpErrorResponse)=>{console.log(err)}
    )
  }

}
