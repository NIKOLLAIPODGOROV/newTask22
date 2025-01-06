import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateOrderResponseType} from "../types/create-order-response.type";
import {Observable} from "rxjs";
import {CreateOrderInputType} from "../types/create-order-input.type";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private http: HttpClient) {
  }

  public createOrder(formData: CreateOrderInputType): Observable<CreateOrderResponseType> {
    return this.http.post<CreateOrderResponseType>('https://testologia.site/order-tea', formData);
  }
}
