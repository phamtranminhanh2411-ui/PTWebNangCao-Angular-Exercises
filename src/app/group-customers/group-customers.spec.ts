import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { GroupCustomers } from './group-customers';

describe('GroupCustomers', () => {
  let component: GroupCustomers;
  let fixture: ComponentFixture<GroupCustomers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupCustomers],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupCustomers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
