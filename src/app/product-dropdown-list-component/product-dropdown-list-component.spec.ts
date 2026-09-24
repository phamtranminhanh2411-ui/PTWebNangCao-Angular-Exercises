import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { ProductDropdownListComponent } from './product-dropdown-list-component';

describe('ProductDropdownListComponent', () => {
  let component: ProductDropdownListComponent;
  let fixture: ComponentFixture<ProductDropdownListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDropdownListComponent],
      imports: [CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDropdownListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
