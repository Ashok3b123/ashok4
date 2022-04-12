import { Component, OnInit } from '@angular/core';
import { VehiclesumarryService } from '../vehiclesumarry.service';

@Component({
  selector: 'app-vehiclesummary',
  templateUrl: './vehiclesummary.component.html',
  styleUrls: ['./vehiclesummary.component.css']
})
export class VehiclesummaryComponent implements OnInit {
datas:any=[];
  constructor(private vehicleService:VehiclesumarryService) {
    vehicleService.getData().subscribe(
      (data:any)=>{this.datas=data},
      (error:any)=>{alert("Internal service error")}
      
    )
  }
  filterTerm="";
  filter()
  {
    this.vehicleService.getfilterdVehicles(this.filterTerm).subscribe(
      (data:any)=>{this.datas=data},
      (error:any)=>{alert("Internal service error")}
    )
  }
  column="";
   order="";
 sort()
 {
   this.vehicleService.getsortVehicles(this.column,this.order).subscribe(
     (data:any)=>{this.datas=data},
     (error:any)=>{alert("Internal service error")}
   )
 }
page="";
limit="";
pagination()
{
  this.vehicleService.getpaginationVehicles(this.page,this.limit).subscribe(
    (data:any)=>{this.datas=data},
    (error:any)=>{alert("Internal service error")}
  )
}


  ngOnInit(): void {
  }

}
