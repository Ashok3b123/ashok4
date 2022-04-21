import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor() { }
   @Input() xyz:any={}
  ngOnInit(): void {
  }

}
