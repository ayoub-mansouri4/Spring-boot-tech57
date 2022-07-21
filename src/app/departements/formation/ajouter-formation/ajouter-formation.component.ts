import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})
export class AjouterFormationComponent implements OnInit {
  formation:Formation=new Formation();

  constructor() { }

  ngOnInit(): void {
  }

}
