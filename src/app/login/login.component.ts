import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
  login()
  {
    console.log(this.loginform);
    console.log(this.loginform.value);
    this.loginsevice.postloginform(this.loginform.value).subscribe(
    (data:any)=>{
      alert("success");
      console.log("data");
      // localStorage.setItem("myAppToken",data.token);
      // this.router.navigateByUrl("/dashboard")
      sessionStorage.setItem("myAppToken",data.token);
      this.router.navigateByUrl("/dashboard")
    },
      
    (error:any)=>{alert("Fail to login")}
    )
  }
  constructor(private loginsevice:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

}
