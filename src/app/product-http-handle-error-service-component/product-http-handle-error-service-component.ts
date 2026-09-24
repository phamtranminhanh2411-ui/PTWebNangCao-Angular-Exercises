import { Component, signal } from '@angular/core';
import { Product } from '../classes/IProducts';
import { ProductHttpHandleErrorService } from '../product-http-handle-error-service/product-http-handle-error-service';

@Component({
  selector: 'app-product-http-handle-error-service-component',
  standalone: false,
  templateUrl: './product-http-handle-error-service-component.html',
  styleUrls: ['./product-http-handle-error-service-component.css'],
})
export class ProductHttpHandleErrorServiceComponent {
  products = signal<Product[]>([]);
  errMessage = signal('');

  constructor(private _service: ProductHttpHandleErrorService) {}

  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: (data) => {
        this.products.set(data);
      },
      error: (err: Error) => {
        this.errMessage.set(err.message);
      },
    });
  }
}
