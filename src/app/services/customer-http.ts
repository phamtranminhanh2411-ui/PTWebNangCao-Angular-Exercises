import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ICustomerGroup } from '../classes/ICustomerGroup';

@Injectable({
  providedIn: 'root'
})
export class CustomerHttpService {

  private _url: string = 'assets/data/customers.json';

  constructor(private _http: HttpClient) {}

  getCustomerGroups(): Observable<ICustomerGroup[]> {
    return this._http
      .get<ICustomerGroup[]>(this._url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}