import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
    public datasub:BehaviorSubject<any>=new BehaviorSubject(0);
    getData()
    {
      return this.datasub.asObservable();
    }
    setData(value:any)
    {
      this.datasub.next(value)
    }
  
}
