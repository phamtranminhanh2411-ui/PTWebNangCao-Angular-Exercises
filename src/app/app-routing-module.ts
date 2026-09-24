import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homework } from './homework/homework';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';
import { ProductHttpHandleErrorServiceComponent } from './product-http-handle-error-service-component/product-http-handle-error-service-component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event';
import { CatalogService } from './catalog-service/catalog-service';
import { GroupCustomers } from './group-customers/group-customers';

const routes: Routes = [
  { path: '', component: Homework },
  { path: 'homework', component: Homework },
  { path: 'learn-directive', component: ProductListComponent },
  { path: 'product-dropdown-list', component: ProductDropdownListComponent },
  { path: 'product-list-call-service', component: ProductListCallServiceComponent },
  { path: 'product-list-call-http-service', component: ProductListCallHttpServiceComponent },
  { path: 'product-http-handle-error-service-component', component: ProductHttpHandleErrorServiceComponent },
  { path: 'service-product-image-event', component: ServiceProductImageEventComponent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent },
  { path: 'catalog-service', component: CatalogService },
  { path: 'group-customers', component: GroupCustomers },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
