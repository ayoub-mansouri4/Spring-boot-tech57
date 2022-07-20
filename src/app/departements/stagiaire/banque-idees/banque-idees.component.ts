import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sujet } from 'src/app/models/sujet';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-banque-idees',
  templateUrl: './banque-idees.component.html',
  styleUrls: ['./banque-idees.component.css']
})
export class BanqueIdeesComponent implements OnInit {
  public sujets!:Sujet[];

  constructor(private stagiaireService:StagiaireService) { }

  ngOnInit(): void {
    this.stagiaireService.listerSujet().subscribe(
      (resp:Sujet[])=>{ 
        console.log(resp)
        this.sujets=resp;
      
      },
      (err:HttpErrorResponse)=>{console.log(err)}
    )
  }

}
