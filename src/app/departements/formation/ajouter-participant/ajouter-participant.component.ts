import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';

@Component({
  selector: 'app-ajouter-participant',
  templateUrl: './ajouter-participant.component.html',
  styleUrls: ['./ajouter-participant.component.css']
})
export class AjouterParticipantComponent implements OnInit {
  participant:Participant=new Participant();
  formations!:Formation[];
  id_formation!:number;

  constructor() { }

  ngOnInit(): void {
  }

}
