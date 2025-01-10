import { Component } from '@angular/core';
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public isMenuOpen = false;

  constructor( private productService: ProductService) {

  }
  public searchProduct(title?: string): void {

      this.productService.setSearchTitle(title)
  }

}
