import { Component, Input, OnInit } from '@angular/core';
import { Departement } from 'src/app/models/departement';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() user_name!:string;
  public departements:Departement[]=[new Departement("stagiaire",true),new Departement("formation",true),new Departement("incubation",true)];
  
  

  constructor() { }

  ngOnInit(): void {
    // this.departements.push(new Departement("Prestation",true));
    // this.departements.push(new Departement("Facturation",true));

  }

}
