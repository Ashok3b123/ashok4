import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    public datasub:BehaviorSubject<any>=new BehaviorSubject(0);
    get Data()
    {
      return this.datasub.asObservable();
    }
    set Data(value:any)
    {
      this. datasub.next(value)
    }

  constructor() { }
}
