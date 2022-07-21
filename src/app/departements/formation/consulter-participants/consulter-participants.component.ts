import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';

@Component({
  selector: 'app-consulter-participants',
  templateUrl: './consulter-participants.component.html',
  styleUrls: ['./consulter-participants.component.css']
})
export class ConsulterParticipantsComponent implements OnInit {
  formations!:Formation[];
  participants!:Participant[];
  id_formation!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
