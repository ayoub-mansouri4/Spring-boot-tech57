import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})
export class AjouterFormationComponent implements OnInit {
  formation:Formation=new Formation();
  isDone!:boolean;

  constructor(public router:Router,public formationService:FormationService) { }

  ngOnInit(): void {
  }

  public ajouter():void{
    this.formationService.ajouterFormation(this.formation).subscribe(
      (resp:Formation)=>{console.log(resp)
        this.isDone=true
        this.router.navigate(['/formation/consulter-formations'])
      },(err:HttpErrorResponse)=>{console.log(err)
      }
    )
  }

}
