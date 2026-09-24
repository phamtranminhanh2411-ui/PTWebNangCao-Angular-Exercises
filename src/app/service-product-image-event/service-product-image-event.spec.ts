import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ServiceProductImageEventComponent } from './service-product-image-event';

describe('ServiceProductImageEventComponent', () => {
  let component: ServiceProductImageEventComponent;
  let fixture: ComponentFixture<ServiceProductImageEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceProductImageEventComponent],
      imports: [CommonModule],
      providers: [
        {
          provide: Router,
          useValue: { navigate: () => {} },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceProductImageEventComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});