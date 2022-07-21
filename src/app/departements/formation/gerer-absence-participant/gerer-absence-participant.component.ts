import { Component, OnInit } from '@angular/core';
import { Absence_participant } from 'src/app/models/absence_participant';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';

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
  succes!:boolean;
  formations!:Formation[];

  constructor() { }

  ngOnInit(): void {
  }

}
