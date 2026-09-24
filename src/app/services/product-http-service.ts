import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../classes/IProducts';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  private readonly url = '/dataset/product.json';

  constructor(private http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}