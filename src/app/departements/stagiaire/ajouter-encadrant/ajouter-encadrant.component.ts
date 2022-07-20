import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Encadrant } from 'src/app/models/encadrant';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-ajouter-encadrant',
  templateUrl: './ajouter-encadrant.component.html',
  styleUrls: ['./ajouter-encadrant.component.css']
})
export class AjouterEncadrantComponent implements OnInit {
  encadrant:Encadrant=new Encadrant()
  succes!:boolean;

  constructor(private stagiaireService:StagiaireService) { }

  ngOnInit(): void {
  }

  ajouter():void{

    console.log(this.encadrant)

    this.stagiaireService.AjouterEncandrant(this.encadrant).subscribe(
      (resp:Encadrant)=>{
        console.log(resp)
        this.succes=true
      },
      (err:HttpErrorResponse)=>{console.log(err)}
    )
  }

}
