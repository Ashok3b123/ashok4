import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccontService } from '../accont.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
      accountForm:FormGroup=new FormGroup({
        account_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
        available_balance:new FormControl(null,[Validators.required,Validators.minLength(1),Validators.maxLength(3)]),
        currency:new FormControl(null,[Validators.required,Validators.minLength(1),Validators.maxLength(3)]),
        account_number:new FormControl(null,[Validators.required,Validators.minLength(1),Validators.maxLength(3)]),
        id:new FormControl(null,[Validators.required,Validators.minLength(1),Validators.maxLength(3)]),
        card:new FormArray([])
     
})   
add() 
{
  this.cardFormArray.push(
    new FormGroup({
      cardno:new FormControl(),
      expiry:new FormControl(),
      cvv:new FormControl()
    })
  )  
}
  
      get cardFormArray()
{
      return this.accountForm.get('card')as FormArray;
}
delete(i:any)
{
  this.cardFormArray.removeAt(i);
}
 submit()
 {
   console.log(this.accountForm);
   console.log(this.accountForm.value);
   this.accontService.postaccont(this.accountForm.value).subscribe(
     (data:any)=>{alert("success")},
     (error:any)=>{alert("Internal service error")}
   )
 }
  constructor(private accontService:AccontService) { }

  ngOnInit(): void {
  }

}
