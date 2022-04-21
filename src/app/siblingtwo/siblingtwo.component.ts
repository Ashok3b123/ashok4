import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-siblingtwo',
  templateUrl: './siblingtwo.component.html',
  styleUrls: ['./siblingtwo.component.css']
})
export class SiblingtwoComponent implements OnInit {

  value:any=0;
  constructor(private commonservice:CommonService) {
    this.commonservice.getData().subscribe(
      (data:any)=>{
        this.value=data
      },
      (error:any)=>{alert("Internal server error")}
    )
   }

  ngOnInit(): void {
  }

}
