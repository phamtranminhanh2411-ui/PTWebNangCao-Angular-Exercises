import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product-service/product-service';
@Component({
selector: 'app-service-product-image-event-detail',
standalone: false,
templateUrl: './service-product-image-event-detail.html',
styleUrls: ['./service-product-image-event-detail.css']
})
export class ServiceProductImageEventDetailComponent {
	selectedProduct: ReturnType<ProductService['getProductDetail']>;

	constructor(
		private activateRoute: ActivatedRoute,
		private productService: ProductService,
		private router: Router,
	) {
		const id = this.activateRoute.snapshot.paramMap.get('id');
		this.selectedProduct = id ? this.productService.getProductDetail(id) : undefined;
	}

	goBack(): void {
		this.router.navigate(['/service-product-image-event']);
	}
}