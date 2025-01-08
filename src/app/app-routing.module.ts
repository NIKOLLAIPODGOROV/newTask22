import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/pages/main/main.component";
import {CatalogueComponent} from "./components/pages/products/catalogue/catalogue.component";
import {OrderComponent} from "./components/pages/order/order.component";
import {ProductComponent} from "./components/pages/products/product/product.component";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'order', component: OrderComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [ReactiveFormsModule, RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
