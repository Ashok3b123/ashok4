import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { VehiclesumarryService } from '../vehiclesumarry.service';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent implements OnInit {
  vehicleForm:FormGroup=new FormGroup({
  vehicle:new FormControl(),
  manufacturer:new FormControl(),
  color:new FormControl(),
  type:new FormControl(),
  id:new FormControl(),
  })
  submit()
  {
    if(this.vehicleForm)
    {
      this.vehicleService.editvehicleForm(this.vehicleForm.value).subscribe(
        (data:any)=>{alert('success')},
        (error:any)=>{alert("fail")}

      )
        
    }
    else{
    this.vehicleService.postvehicle(this.vehicleForm).subscribe(
      (data:any)=>{
        this.vehicleForm=data;
      
    },
      (error:any)=>{alert("Internal service error")}
    )
      }
  }
details:any={}
  constructor(private vehicleService:VehiclesumarryService,private actroute:ActivatedRoute) {
    this.actroute.params.subscribe(
      (data:any)=>{
        this.vehicleService.editvehicleForm(data.id).subscribe(
          (data:any)=>{
            this.details=data;
            this.vehicleForm.patchValue(data)
          }
        )
      }
    )
   }
    
  ngOnInit(): void {
  }
  
}
