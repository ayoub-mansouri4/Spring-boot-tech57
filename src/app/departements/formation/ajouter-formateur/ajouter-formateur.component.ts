import { Component, OnInit } from '@angular/core';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';

@Component({
  selector: 'app-ajouter-formateur',
  templateUrl: './ajouter-formateur.component.html',
  styleUrls: ['./ajouter-formateur.component.css']
})
export class AjouterFormateurComponent implements OnInit {
  formations!:Formation[];
  formateur:Formateur=new Formateur();
  id_formation!:number;

  constructor() { }

  ngOnInit(): void {
  }

}
