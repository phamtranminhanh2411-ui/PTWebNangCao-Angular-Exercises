import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductListCallServiceComponent } from './product-list-call-service-component';

describe('ProductListCallServiceComponent', () => {
  let component: ProductListCallServiceComponent;
  let fixture: ComponentFixture<ProductListCallServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListCallServiceComponent],
      imports: [CommonModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListCallServiceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
