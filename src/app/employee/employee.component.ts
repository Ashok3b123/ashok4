import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   datas:any=[];
  constructor(private employee:EmployeeService, router:Router) {

    this.employee.getdetail().subscribe( 
      (data:any)=>{this.datas=data},
      (error: any)=>{ alert("Internal service error");})
    }
  delete(data:any)
  {
    // this.employee.deleteemployeeservice(data).subscribe(
      // (data:any)=>{alert(success)};
    // )
  }
    
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    filterTerm="";
    filter()
    {
      this.employee.getfiltered(this.filterTerm).subscribe(
        (data:any)=>{this.datas=data},
        (error:any)=>{alert("Internal service error")}
      )
      
    }
}




