import { Component, signal } from '@angular/core';
import { Product } from '../classes/IProducts';
import { ProductHttpService } from '../services/product-http-service';

@Component({
  selector: 'app-product-list-call-http-service-component',
  standalone: false,
  templateUrl: './product-list-call-http-service-component.html',
  styleUrls: ['./product-list-call-http-service-component.css'],
})
export class ProductListCallHttpServiceComponent {
  products = signal<Product[]>([]);

  constructor(private _service: ProductHttpService) {}

  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: (data: Product[]) => {
        this.products.set(data);
      },
      error: (err) => {
        console.log(err);
        alert('Error occurred while fetching data from server: ' + JSON.stringify(err));
      },
    });
  }
}