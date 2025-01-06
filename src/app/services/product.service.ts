import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, shareReplay, Observable, tap} from 'rxjs';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {
  private allProducts$ = this.http.get<ProductType[]>('https://testologia.ru/tea').pipe(shareReplay(1));
  public products$ = new BehaviorSubject<ProductType[]>([]);
  public isShowLoader$ = new BehaviorSubject<boolean>(false);
  private searchTitle$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<ProductType[]> {
    const teaTitle = this.searchTitle$.getValue();
    this.isShowLoader$.next(true);
    return this.allProducts$
      .pipe(
        tap(products => {
          if (!teaTitle) {
            this.products$.next(products);
            this.isShowLoader$.next(false);
            return;
          }
          this.products$
            .next(products.filter(product => product.title.toLowerCase().includes(teaTitle.toLowerCase())))
          this.isShowLoader$.next(false);
        })
      )
  }

  get searchTitle(): string {
    return this.searchTitle$.getValue();
  }
  public setSearchTitle(title?: string): void {
    this.searchTitle$.next(title ? title : '');
  }

}
