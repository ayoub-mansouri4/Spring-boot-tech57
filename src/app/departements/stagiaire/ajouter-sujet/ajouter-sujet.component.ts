import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sujet } from 'src/app/models/sujet';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-ajouter-sujet',
  templateUrl: './ajouter-sujet.component.html',
  styleUrls: ['./ajouter-sujet.component.css']
})
export class AjouterSujetComponent implements OnInit {
  public sujet:Sujet=new Sujet();

  constructor(private stagiaireService:StagiaireService,public router:Router) { }

  ngOnInit(): void {
  }

  ajouter():void{
    this.stagiaireService.ajouterSujet(this.sujet).subscribe( 
      (resp:Sujet)=>{
        console.log(resp)
          this.router.navigate(["/stagiaire/banque-idees"]);
      },
        
    )
  }

 
}
