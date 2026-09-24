import { ICustomer } from './ICustomer';

export interface ICustomerGroup {
  CustomerTypeId: number;
  CustomterTypeName: string;
  Customers: ICustomer[];
}