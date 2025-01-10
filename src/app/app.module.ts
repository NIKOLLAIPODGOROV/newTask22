import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { ProductCardComponent } from './components/common/product-card/product-card.component';
import { TitleComponent } from './components/common/title/title.component';
import { PopupComponent } from './components/common/popup/popup.component';
import { MainComponent } from './components/pages/main/main.component';
import { OrderComponent } from './components/pages/order/order.component';
import { ProductComponent } from './components/pages/products/product/product.component';
import { CatalogueComponent } from './components/pages/products/catalogue/catalogue.component';
import {ProductService} from "./services/product.service";
import { NgbAccordionModule, NgbCollapseModule, NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, registerLocaleData} from "@angular/common";
import localeRu from "@angular/common/locales/ru";
import { HttpClientModule} from "@angular/common/http";
import {OrderService} from "./services/order.service";
import {FormService} from "./services/form.service";
import {QuestionsService} from "./services/questions.service";

 registerLocaleData(localeRu, "ru");

@NgModule({
  declarations: [
    AppComponent,
   MainComponent,
    FooterComponent,
    HeaderComponent,
    ProductCardComponent,
    TitleComponent,
    PopupComponent,
    OrderComponent,
    ProductComponent,
    CatalogueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    NgbAccordionModule,
    NgbDropdownModule,
    NgbCollapseModule
  ],
  providers: [
    ProductService,
    OrderService,
    FormService,
    QuestionsService,
    AppRoutingModule,
  //  {provide: LOCALE_ID, useValue: 'ru'},
  ],
  bootstrap: [
    AppComponent,
    PopupComponent,
    OrderComponent,
    ProductComponent,
    CatalogueComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    ProductCardComponent,]
})
export class AppModule { }
