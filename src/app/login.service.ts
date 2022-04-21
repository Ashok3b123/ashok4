import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 postloginform(loginform:any){
   return this.http.post('https://reqres.in/api/login',loginform)
 }
  constructor(private http:HttpClient) { }
}
