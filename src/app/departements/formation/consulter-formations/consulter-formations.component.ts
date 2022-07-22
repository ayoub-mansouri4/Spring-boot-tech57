import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-consulter-formations',
  templateUrl: './consulter-formations.component.html',
  styleUrls: ['./consulter-formations.component.css']
})
export class ConsulterFormationsComponent implements OnInit {
  formations!:Formation[];

  constructor(private router:Router,public formationService:FormationService) { }

  ngOnInit(): void {
    this.formationService.consulterFormation().subscribe(
      (resp:Formation[])=>{
        console.log(resp);
        this.formations=resp
      },
      (err:HttpErrorResponse)=>{console.log(err)}
    )
  }

}
