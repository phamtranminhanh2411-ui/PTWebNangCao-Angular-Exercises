import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product-service/product-service';
@Component({
selector: 'app-service-product-image-event',
standalone: false,
templateUrl: './service-product-image-event.html',
styleUrls: ['./service-product-image-event.css']
})
export class ServiceProductImageEventComponent {
  public products: ReturnType<ProductService['getProductsWithImages']> = [];

  constructor(
    private productService: ProductService,
    private router: Router,
  ) {
    this.products = this.productService.getProductsWithImages();
  }

  viewDetail(product: { ProductId: string }): void {
    this.router.navigate(['/service-product-image-event', product.ProductId]);
  }
}
