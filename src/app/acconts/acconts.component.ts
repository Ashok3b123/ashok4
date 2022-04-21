import { Component, OnInit } from '@angular/core';
import { AccontService } from '../accont.service';

@Component({
  selector: 'app-acconts',
  templateUrl: './acconts.component.html',
  styleUrls: ['./acconts.component.css']
})
export class AccontsComponent implements OnInit {
 flips:any=[];
  constructor(private accontservice:AccontService){
  accontservice.getflip().subscribe( 
    (data:any)=>{this.flips=data},
    (error: any)=>{ alert("Internal service error");})
  }
  filterTerm="";
  filter()
  {
    this.accontservice.getfliteredflips(this.filterTerm).subscribe(
      (data:any)=>{this.flips=data},
      (error:any)=>{alert("Internal service error")}
    )
    
    }

  ngOnInit(): void {
  }

}
