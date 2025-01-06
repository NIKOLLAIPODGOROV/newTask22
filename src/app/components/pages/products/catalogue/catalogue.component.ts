import {Component, DoCheck} from '@angular/core';
import {ProductService} from "../../../../services/product.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements DoCheck {
  public products$ = this.productService.products$;
  public isShowLoader$ = this.productService.isShowLoader$;

  constructor(private productService: ProductService) {
  }

  ngDoCheck() {
    this.productService.getProducts().subscribe();
  }
}

