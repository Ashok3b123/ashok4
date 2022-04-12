import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesumarryService {
  
data:any=[];
getData():Observable<any>{
  return this.http.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction")
}
getfilterdVehicles(filterTerm:any)
{
  return this.http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?filter='+filterTerm)

}
getsortVehicles(column:any,order:any)
{
  return this.http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?sortBy='+column+'&order='+order)
}
getpaginationVehicles(page:any,limit:any)
{
  return this.http.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?page='+page+'&limit='+limit)
}
  constructor(private http:HttpClient) {
   
   }
   
}
