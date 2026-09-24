import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/IProducts';
type RandomDogResponse = {
  url: string;
};

@Component({
  selector: 'app-product-dropdown-list-component',
  standalone: false,
  styleUrl: './product-dropdown-list-component.css',
  templateUrl: './product-dropdown-list-component.html',
})
export class ProductDropdownListComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'laptop', price: 1000, image: 'laptop.svg' },
    { id: 2, name: 'phone', price: -500, image: 'phone.svg' },
    { id: 3, name: 'tablet', price: 300, image: 'tablet.svg' },
  ];

  async ngOnInit(): Promise<void> {
    await Promise.all(
      this.products.map(async (product) => {
        try {
          const response = await fetch(
            'https://random.dog/woof.json?filter=mp4,webm',
          );
          if (!response.ok) {
            throw new Error(`Random Dog API returned ${response.status}`);
          }

          const dog = (await response.json()) as RandomDogResponse;
          product.image = dog.url;
        } catch (error) {
          console.error(`Cannot load image for ${product.name}:`, error);
        }
      }),
    );
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}
