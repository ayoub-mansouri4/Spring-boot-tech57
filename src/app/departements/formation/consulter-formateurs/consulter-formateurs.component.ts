import { Component, OnInit } from '@angular/core';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';

@Component({
  selector: 'app-consulter-formateurs',
  templateUrl: './consulter-formateurs.component.html',
  styleUrls: ['./consulter-formateurs.component.css']
})
export class ConsulterFormateursComponent implements OnInit {
  formations!:Formation[];
  formateurs!:Formateur[];
  constructor() { }

  ngOnInit(): void {
  }

}
