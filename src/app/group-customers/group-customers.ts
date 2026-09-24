import { Component, OnInit } from '@angular/core';
import { CustomerHttpService } from '../services/customer-http';
import { ICustomerGroup } from '../classes/ICustomerGroup';

@Component({
  selector: 'app-group-customers',
  standalone: false,
  templateUrl: './group-customers.html',
  styleUrl: './group-customers.css'
})
export class GroupCustomers implements OnInit {

  customerGroups: ICustomerGroup[] = [];
  errMessage: string = '';

  constructor(
    private customerService: CustomerHttpService
  ) {}

  ngOnInit(): void {

    this.customerService.getCustomerGroups().subscribe({

      next: (data) => {

        console.log('CUSTOMER DATA:', data);
        this.customerGroups = data;

        console.log(
          'AFTER ASSIGN:',
          this.customerGroups.length
        );
      },

      error: (err) => {
        console.error('CUSTOMER ERROR:', err);
        this.errMessage = err.message;
      }

    });

  }
}