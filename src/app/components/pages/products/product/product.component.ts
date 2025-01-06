import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map, of, switchMap} from "rxjs";
import {ProductService} from "../../../../services/product.service";
import {OrderService} from "../../../../services/order.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product$ = this.activatedRoute.params
    .pipe(
      switchMap(({id}) => {
        if (!id) {
          return of(null);
        }
        return this.productService.products$.pipe(
          map(products => products.find(product => product.id.toString() === id) || null),
        )
      }),
    )

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe();
  }

  public toOrderPage(product: ProductType) {
    this.orderService.setProduct(product);
  }
}
