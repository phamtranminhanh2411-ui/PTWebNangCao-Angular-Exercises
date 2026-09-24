import { Component } from '@angular/core';
import { Product } from '../classes/IProducts';
@Component({
  selector: 'app-product-list-component',
  standalone: false,
  templateUrl: './product-list-component.html',
  styleUrls: ['../homework/homework.css'],
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, image: 'https://surfaceviet.vn/wp-content/uploads/2024/03/Surface-Laptop-6-Platinum.png' },
    { id: 2, name: 'Iphone', price: 500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPXRWgcvTIqE5RiGZA8_Wv1qU4Y3aB8P8mYKFdJ2juKw&s=10' },
    { id: 3, name: 'Tablet', price: 700, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo0d8ayNUSzYm6g7OXioNSmcff_XbQhyLWElbSTH24-g&s' },
  ];
}

