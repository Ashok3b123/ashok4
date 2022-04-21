import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   getdetail():Observable<any>{
     return this.http.get('https://6222413b666291106a21d80b.mockapi.io/employees');
   }
   getfiltered(filterTerm:any){
     return this.http.get('https://6222413b666291106a21d80b.mockapi.io/employees'+'?filter='+filterTerm);
   }
   postemployee( employee:any){
     return this.http.post('https://6222413b666291106a21d80b.mockapi.io/employees',employee)
    
   }
  constructor(private http: HttpClient) { }
}
