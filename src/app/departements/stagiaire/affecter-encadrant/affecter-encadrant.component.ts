import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Encadrant } from 'src/app/models/encadrant';
import { Stagiaire } from 'src/app/models/stagiaire';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-affecter-encadrant',
  templateUrl: './affecter-encadrant.component.html',
  styleUrls: ['./affecter-encadrant.component.css']
})
export class AffecterEncadrantComponent implements OnInit {
  id_stagiaire!:number;
  id_encadrant!:number
  liste_Stagiaires!:Stagiaire[];
  liste_Encadrants!:Encadrant[];
  succes!:boolean;

  constructor(private stagiaireService:StagiaireService) { }

  ngOnInit(): void {
    this.stagiaireService.listerStagiaire().subscribe(
      (resp:Stagiaire[])=>{
        console.log(resp)
        this.liste_Stagiaires=resp;
      },
      (err:HttpErrorResponse)=>{console.log(err)}

    )
    this.stagiaireService.listerEncadrants().subscribe(
      (resp:Encadrant[])=>{
        console.log(resp)
        this.liste_Encadrants=resp;
      },
      (err:HttpErrorResponse)=>{console.log(err)}

    )
  }




  affecter():void{

       this.stagiaireService.affecterEncadrant(this.id_stagiaire,this.id_encadrant).subscribe(
        (resp:boolean)=>{console.log(resp)
          this.succes=true
        },
        (err:HttpErrorResponse)=>{console.log(err)}
       )
  }

}
