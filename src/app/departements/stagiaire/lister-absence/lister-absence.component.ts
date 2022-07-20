import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stagiaire } from 'src/app/models/stagiaire';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-lister-absence',
  templateUrl: './lister-absence.component.html',
  styleUrls: ['./lister-absence.component.css']
})
export class ListerAbsenceComponent implements OnInit {
  stagiaire:Stagiaire=new Stagiaire();
  id_stag!:number;

  constructor(public stagiaireService:StagiaireService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id_stag= params['id'];
      console.log(this.id_stag); // Print the parameter to the console. 
      this.stagiaireService.getStagiaire(this.id_stag).subscribe(
        (resp:Stagiaire)=>{
          console.log(resp)
          this.stagiaire=resp;
        },
        (err:HttpErrorResponse)=>{console.log(err)}
      )
  });

  }

}
