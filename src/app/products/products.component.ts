import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   groups:any=[];
   

  constructor(private productservice:ProductService){ 
        
    productservice.getGroup().subscribe(
      (data:any)=>{this.groups=data},
      (error: any)=>{ alert("Internal service error");})
  }
   
  ngOnInit(): void {
  }
}


