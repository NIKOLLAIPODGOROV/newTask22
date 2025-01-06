import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  get product(): string | null {
    return localStorage.getItem('titleTea');
  }

  public setProduct(product: ProductType): void {
    localStorage.setItem('titleTea', product.title);
  }
}
