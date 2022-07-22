import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-consulter-formateurs',
  templateUrl: './consulter-formateurs.component.html',
  styleUrls: ['./consulter-formateurs.component.css']
})
export class ConsulterFormateursComponent implements OnInit {
  //formations!:Formation[];
  formateurs!:Formateur[];
  constructor(private router:Router,public formationService:FormationService) { }

  ngOnInit(): void {
      this.formationService.consulterFormateurs().subscribe(
        (resp:Formateur[])=>{
          console.log(resp)
          this.formateurs=resp
        },
        (err:HttpErrorResponse)=>{console.log(err)}
      )
  }

}
