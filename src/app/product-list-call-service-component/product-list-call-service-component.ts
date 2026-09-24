import { Component } from '@angular/core';
import { Product } from '../classes/IProducts';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-list-call-service-component',
  standalone: false,
  templateUrl: './product-list-call-service-component.html',
  styleUrls: ['./product-list-call-service-component.css'],
})
export class ProductListCallServiceComponent {
  minPrice: number = 0;
  maxPrice: number = 100;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  doFilterByPrice() {
    this.products = this.productService.getProducts()
      .filter(p => p.price >= this.minPrice && p.price <= this.maxPrice);
  }
}