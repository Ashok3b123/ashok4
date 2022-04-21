import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccontService {

   getflip():Observable<any>{
     return this.http.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
   }
   getfliteredflips(filterTerm:any){
     return this.http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals'+'?filter='+filterTerm);
     
   }
   postaccont(account:any)
   {
     return this.http.post('https://6128991386a213001729f9df.mockapi.io/test/v1/principals',account)
   }
  constructor(private http: HttpClient) { }
}
