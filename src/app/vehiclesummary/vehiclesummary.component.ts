import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehiclesumarryService } from '../vehiclesumarry.service';

@Component({
  selector: 'app-vehiclesummary',
  templateUrl: './vehiclesummary.component.html',
  styleUrls: ['./vehiclesummary.component.css']
})
export class VehiclesummaryComponent implements OnInit {
datas:any=[];
  constructor(private vehicleService:VehiclesumarryService,private router:Router) {
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
delete(data:any)
{
 this.vehicleService.deletevehicle(data).subscribe(
   (data:any)=>{alert('success')},
    (error:any)=>{alert('Internal service error')}
 )
}
 view(dataId:any)
 {
    this.router.navigateByUrl("/dashboard/employeedetails"+"/"+dataId)

 }
edit(dataid:any)
{
  this.router.navigateByUrl("/dashboard/editdetails"+"/"+dataid)
}
  ngOnInit(): void {
  }

}
