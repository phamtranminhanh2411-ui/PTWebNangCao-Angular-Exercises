import { of, throwError } from 'rxjs';
import { vi } from 'vitest';

import { ICustomerGroup } from '../classes/ICustomerGroup';
import { CustomerHttpService } from '../services/customer-http';
import { GroupCustomers } from './group-customers';

describe('GroupCustomers', () => {
  const customerGroups: ICustomerGroup[] = [
    {
      CustomerTypeId: 1,
      CustomterTypeName: 'VIP',
      Customers: [
        {
          Id: 'Cus123',
          Name: 'Obama',
          Email: 'obama@gmail.com',
          Age: 67,
          Image: 'assets/avatars/obama.jpg',
        },
      ],
    },
  ];

  it('stores and logs customer data returned by the service', () => {
    const service = {
      getCustomerGroups: () => of(customerGroups),
    } as unknown as CustomerHttpService;
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const component = new GroupCustomers(service);

    component.ngOnInit();

    expect(component.customerGroups).toEqual(customerGroups);
    expect(logSpy).toHaveBeenCalledWith('CUSTOMER DATA:', customerGroups);
    logSpy.mockRestore();
  });

  it('stores and logs the HTTP error', () => {
    const error = new Error('Unable to load customers');
    const service = {
      getCustomerGroups: () => throwError(() => error),
    } as unknown as CustomerHttpService;
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const component = new GroupCustomers(service);

    component.ngOnInit();

    expect(component.errMessage).toBe('Unable to load customers');
    expect(errorSpy).toHaveBeenCalledWith('CUSTOMER ERROR:', error);
    errorSpy.mockRestore();
  });
});
