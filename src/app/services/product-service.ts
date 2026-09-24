import { Injectable } from '@angular/core';
import { Product } from '../classes/IProducts';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'laptop', price: 1000, image: 'https://random.dog/' },
    { id: 2, name: 'phone', price: -500, image: 'https://random.dog/' },
    { id: 3, name: 'tablet', price: 300, image: 'https://random.dog/' },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}