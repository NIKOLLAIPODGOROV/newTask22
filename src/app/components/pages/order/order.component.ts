import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../../../services/form.service";
import {OrderService} from "../../../services/order.service";
import {CreateOrderInputType} from "../../../types/create-order-input.type";


@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: [],
})
export class OrderComponent implements OnInit {
  public isSuccessForm: boolean = false;
  public dangerTextForm: boolean = false;
  public isDisabledButton: boolean = false;

   buyTeaForm: FormGroup = this.fb.group({
    product: {value: '', disabled: true},
    name: ['', [Validators.required, Validators.pattern('^([А-Яа-я]$')]],
    phone: ['', [Validators.required, Validators.pattern('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$')]],
    last_name: ['', [Validators.required, Validators.pattern('^([А-Яа-я]$')]],
    country: ['', [Validators.required, Validators.pattern('^[а-яА-Я]+(?:[\\s-][а-яА-Я]+)*$')]],
    zip: ['', [Validators.required, Validators.pattern('^\d{6}$')]],
    address: ['', [Validators.required, Validators.pattern(
      '\\d{6}[\\,\\s]*[г\\.]*\\s*[А-Яа-я\\-]{2,}[\\,\\s]*[ул|пер|пр|б-р]*\\.\\s*[А-Яа-я\\-]{2,}[\\,\\s]*[д\\.]*\\s*\\d{1,3}[\\\\\\d{1,3}]*[\\,\\s\\-]*[кв\\.]*\\s*\\d{1,3}\\s*')]],
    comment: '',
  });

  constructor(private formService: FormService,
              private orderService: OrderService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    const productTitle = this.orderService.product;
    if (productTitle) {
      this.buyTeaForm.patchValue({
        product: productTitle,
      })
    }
  }

  get product() {
    return this.buyTeaForm.get('product');
  }
  get name() {
    return this.buyTeaForm.get('name');
  }
  get phone() {
    return this.buyTeaForm.get('phone');
  }

  get lastName() {
    return this.buyTeaForm.get('last_name');
  }

  get country() {
    return this.buyTeaForm.get('country');
  }

  get zip() {
    return this.buyTeaForm.get('zip');
  }

  get address() {
    return this.buyTeaForm.get('address');
  }

  get comment() {
    return this.buyTeaForm.get('comment');
  }

  public sendOrder(): void {
    this.isDisabledButton = true;
    this.buyTeaForm.markAllAsTouched();
    if (this.buyTeaForm.invalid) {
      this.isDisabledButton = false;
      this.isSuccessForm = false;
      this.dangerTextForm = true;
      setTimeout(() => {
        this.dangerTextForm = false;
      }, 3000);
      return;
    }
    const data: CreateOrderInputType = this.buyTeaForm.getRawValue();
    this.formService
      .createOrder(data)
      .subscribe(result => {
        if (result.success === 0) {
          this.isSuccessForm = false;
          this.dangerTextForm = true;
        } else if (result.success === 1) {
          this.isSuccessForm = true;
          this.dangerTextForm = false;
        }
        this.isDisabledButton = false;
      });
  }
}
