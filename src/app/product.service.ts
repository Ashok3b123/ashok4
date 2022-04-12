import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  static getGroup() {
    throw new Error('Method not implemented.');
  }
  static getgroup() {
    throw new Error('Method not implemented.');
  }
  getGroup():Observable<any>{
    return this.httpClient.get("https://fakestoreapi.com/products")
  }
  constructor(private httpClient:HttpClient) {}
}
