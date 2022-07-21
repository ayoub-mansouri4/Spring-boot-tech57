import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';

@Component({
  selector: 'app-consulter-formations',
  templateUrl: './consulter-formations.component.html',
  styleUrls: ['./consulter-formations.component.css']
})
export class ConsulterFormationsComponent implements OnInit {
  formations!:Formation[];

  constructor() { }

  ngOnInit(): void {
  }

}
