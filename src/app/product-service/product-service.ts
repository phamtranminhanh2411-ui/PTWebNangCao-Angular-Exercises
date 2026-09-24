import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsImage = [
    { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: 'assets/coca.jpg' },
    { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'assets/pepsi.jpg' },
    { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'assets/sting.jpg' },
  ];

  getProductsWithImages() {
    return this.productsImage;
  }

  getProductDetail(id: string) {
    return this.productsImage.find(product => product.ProductId === id);
  }
}
