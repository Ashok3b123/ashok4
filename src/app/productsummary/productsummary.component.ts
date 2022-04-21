import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product1Service } from '../product1.service';

@Component({
  selector: 'app-productsummary',
  templateUrl: './productsummary.component.html',
  styleUrls: ['./productsummary.component.css']
})
export class ProductsummaryComponent implements OnInit {
  constructor(private product1service:Product1Service ,private router:Router) { 
          
    product1service.getGroup().subscribe(
      (data:any)=>{this.groups=data},
      (error: any)=>{ alert("Internal service error");})
  }
//   edit(dataid:any)
// {
//   this.router.navigateByUrl("/dashboard/editdetails"+"/"+dataid)
// }
groups:any={}
xyz:any={}
send(groups:any){
  this.xyz=groups
}
  ngOnInit(): void {
  }

}
