import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-position',
  templateUrl: './current-position.component.html',
  styleUrls: ['./current-position.component.css']
})
export class CurrentPositionComponent implements OnInit {
  public myPostion!:string[]
  public urlPosition!:string;
  public newUrl!:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.urlPosition=this.router.url;
      this.myPostion=this.urlPosition.split('/');
     
      console.log(this.myPostion)
      console.log(this.urlPosition)

  }

    public buildUrl(postion:string):void{
        let index=this.urlPosition.indexOf(postion.replace(" ","-"));
        console.log(this.urlPosition)
        console.log(postion)
        let new_index=index+postion.replace(" ","-").length;
        console.log(new_index)
        console.log(this.urlPosition.slice(0,new_index))
       this.router.navigate([this.urlPosition.slice(0,new_index)])
    }

}
