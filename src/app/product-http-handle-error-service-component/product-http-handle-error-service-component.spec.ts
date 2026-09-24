import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { ProductHttpHandleErrorServiceComponent } from './product-http-handle-error-service-component';

describe('ProductHttpHandleErrorServiceComponent', () => {
  let component: ProductHttpHandleErrorServiceComponent;
  let fixture: ComponentFixture<ProductHttpHandleErrorServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductHttpHandleErrorServiceComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductHttpHandleErrorServiceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
