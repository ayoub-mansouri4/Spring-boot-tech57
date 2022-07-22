import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-consulter-participants',
  templateUrl: './consulter-participants.component.html',
  styleUrls: ['./consulter-participants.component.css']
})
export class ConsulterParticipantsComponent implements OnInit {
  formations!:Formation[];
  participants!:Participant[];
  id_formation!:number;

  constructor(public router:Router,public formationService:FormationService) { }

  ngOnInit(): void {
    this.formationService.consulterFormation().subscribe(
      (resp:Formation[])=>{
        console.log(resp)
        this.formations=resp;
      },
      (err:HttpErrorResponse)=>{console.log(err)}
    )
  }

  afficher():void{
    this.formationService.consulterParticipant(this.id_formation).subscribe(
      (resp:Participant[])=>{
        console.log(resp)
        this.participants=resp
      },
      (err:HttpErrorResponse)=>{console.log(err)}

    )
  }

}
