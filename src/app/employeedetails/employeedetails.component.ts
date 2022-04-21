import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { VehiclesumarryService } from '../vehiclesumarry.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
    

  details:any={};   
  constructor(private activatedRoute:ActivatedRoute,private vehicle:VehiclesumarryService) {
    this.activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data)
        this.vehicle.getdata(data.id).subscribe(
          
          (data:any)=>{this.details=data;},
          (error:any)=>{alert("Internal service error")}
         ) }
    )
  }
  
  ngOnInit(): void {
  }

}
