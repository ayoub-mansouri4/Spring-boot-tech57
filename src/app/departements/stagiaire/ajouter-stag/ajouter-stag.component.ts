import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stagiaire } from 'src/app/models/stagiaire';
import { Sujet } from 'src/app/models/sujet';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-ajouter-stag',
  templateUrl: './ajouter-stag.component.html',
  styleUrls: ['./ajouter-stag.component.css']
})
export class AjouterStagComponent implements OnInit {
   stagiaire:Stagiaire=new Stagiaire();
   sujet:Sujet=new Sujet();
   part2_duree!:string;
   type_stage_etude!:string;
  avecSujet!:boolean;
  id_stag!:number;
  id_sujet!:number;
  constructor(private router:Router,private activatedRoute: ActivatedRoute,private stagiaireService:StagiaireService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.avecSujet= params['avecSujet'];
      console.log(this.avecSujet); // Print the parameter to the console. 
  });
  }

  ajouterStagiaire():void{
    this.stagiaire.duree_stag=this.stagiaire.duree_stag+" "+this.part2_duree;
    this.stagiaire.type_stag=this.stagiaire.type_stag+" "+this.type_stage_etude;
    console.log(this.stagiaire.duree_stag)
    console.log(this.stagiaire.type_stag)
    
    
    this.stagiaireService.ajouterStagiaire(this.stagiaire).subscribe(
      (resp1:Stagiaire)=>{
        this.id_stag=resp1.id_stag
        if(this.sujet.titre_sujet!=undefined && this.sujet.description_sujet!=undefined){
          this.stagiaireService.ajouterSujet(this.sujet).subscribe( 
            (resp2:Sujet)=>{
              this.id_sujet=resp2.id_sujet
              this.stagiaireService.affecterSujet(this.id_stag,this.id_sujet).subscribe(
                (resp:boolean)=>{console.log(resp)
                  this.router.navigate([`/stagiaire/liste-stagiaires`])
                },
                 (err:HttpErrorResponse)=>{console.log(err)}
        
               )
            
          },
          (err:HttpErrorResponse)=>console.log(err)
        ) }else{
          this.router.navigate([`/stagiaire/liste-stagiaires`])
        }

       
      },
      (err:HttpErrorResponse)=>console.log(err)
      
    )


       
    }
  

}
