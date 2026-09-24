import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

interface Customer {
  Id: string;
  Name: string;
  Email: string;
  Age: number;
  Image: string;
}

interface CustomerGroup {
  CustomerTypeId: number;
  CustomerTypeName: string;
  Customers: Customer[];
}

@Component({
  selector: 'app-group-customers',
  standalone: false,
  templateUrl: './group-customers.html',
  styleUrl: './group-customers.css',
})
export class GroupCustomers {
  customerGroups$: Observable<CustomerGroup[]>;
  errorMessage = '';

  constructor(private http: HttpClient) {
    this.customerGroups$ = this.http
      .get<CustomerGroup[]>('/assets/data/customer.json')
      .pipe(
        catchError(() => {
          this.errorMessage = 'Không thể tải dữ liệu khách hàng.';
          return of([]);
        }),
      );
  }
}
