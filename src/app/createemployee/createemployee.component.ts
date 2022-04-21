import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee:FormGroup=new FormGroup({
    name:new FormControl(),
    mobile:new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
        address:new FormGroup({
          addressline:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
          city:new FormControl(),
          state:new FormControl(),
          pincode:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(5)])
        }),
    educationform:new FormArray([]),
    role:new FormControl(),
    id:new FormControl()
  })
  
    get educationFormArray()
    {
      return this.employee.get('educationform')as FormArray;
    }
    add(){
      this.educationFormArray.push(
        new FormGroup({
          year:new FormControl(),
          qualification:new FormControl(),
          percentage:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(5)])
  
        })
      )
    }
      delete(i:any)
    {
      this.educationFormArray.removeAt(i);
    }
submit()
 {
   console.log(this.employee);
   console.log(this.employee.value);
   this.employeeService.postemployee(this.employee.value).subscribe(
     (data:any)=>{alert("success")},
     (error:any)=>{alert("Internal service error")}
   )
   
 }
 constructor(private employeeService:EmployeeService) {
   this.employee.get('role')?.valueChanges.subscribe(
     (data:any)=>{
       if(data=="FE"){
      this.employee.addControl('html',new FormControl)
      this.employee.addControl('angular',new FormControl)
      this.employee.removeControl('java',)
      this.employee.removeControl('sql')
    }
  
   else{
     this.employee.addControl('java',new FormControl);
     this.employee.addControl('sql',new FormControl)
     this.employee.removeControl('html')
     this.employee.removeControl('angular')

   } 
  },
  (error:any)=>{"Internal service error"}
   )
  
  }

  ngOnInit(): void {
  }
}

