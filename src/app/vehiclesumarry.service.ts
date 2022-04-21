import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesumarryService {
  
data:any=[];
getData():Observable<Vehicle[]>{
  return this.http.get<Vehicle[]>("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction")
}
getdata(id:any):Observable<any>{
  return this.http.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+"/"+id)
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
postvehicle(vehicle:any)
{
  return this.http.post('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',vehicle)
}
  constructor(private http:HttpClient) {
   
   }
   deletevehicle(data:any)
 {
   return this.http.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'/'+data)
 }
 editvehicleForm(vehicle:any):Observable<any>
 {
   return this.http.put('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'/'+vehicle.id,vehicle);
 }
}
