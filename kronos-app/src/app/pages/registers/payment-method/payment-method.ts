import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../../shared/button/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CreatePaymentMethodDto, PaymentMethodService } from '../../../api';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { PaymentMethodType } from '../../../enums/payment-method-type.enum';
import { enumToOptions } from '../../../utils/enum-options';

@Component({
  selector: 'app-payment-method',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Button,
    IconFieldModule,
    InputIconModule,
    DialogModule,
    FloatLabelModule,
    FormsModule,
    ToggleSwitchModule,
    InputTextModule,
    SelectModule,
  ],
  templateUrl: './payment-method.html',
  styles: [
    `
      .card {
        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease;
      }

      .card:hover {
        transform: translateY(-2px);
        box-shadow:
          0 4px 12px rgba(0, 0, 0, 0.08),
          0 0 24px rgba(242, 138, 92, 0.25);
      }
    `,
  ],
})
export class PaymentMethod implements OnInit {
  modalOpen: boolean = false;
  isEditMode: boolean = false;
  paymentMethodList: any[] = [];
  formGroup: FormGroup;
  paymentMethodTypeOptions = enumToOptions(PaymentMethodType);

  constructor(
    private paymentMethodService: PaymentMethodService,
    private fb: FormBuilder,
  ) {
    this.formGroup = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      type: ['', Validators.required],
      isActive: [null],
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.paymentMethodService.paymentMethodControllerFindAll().subscribe((data) => {
      this.paymentMethodList = data;
    });
  }

  save() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      this.formGroup.updateValueAndValidity();
      return;
    }

    const payload: CreatePaymentMethodDto = {
      tenantId: 1,
      name: this.formGroup.value.name,
      type: this.formGroup.value.type,
      isActive: this.formGroup.value.isActive,
    };

    if (this.isEditMode) {
      return this.paymentMethodService.paymentMethodControllerUpdate(this.formGroup.value.id, payload).subscribe(() => {
        this.closeModal();
        this.getData();
      });
    }

    return this.paymentMethodService.paymentMethodControllerCreate(payload).subscribe(() => {
      this.closeModal();
      this.getData();
    });
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.formGroup.reset();
    this.modalOpen = false;
    this.isEditMode = false;
  }

  onChangeStatus(item: any) {
    if (!item.id) return;

    const payload: CreatePaymentMethodDto = {
      tenantId: 1,
      name: item.name,
      type: item.type,
      isActive: item.isActive,
    };

    this.paymentMethodService.paymentMethodControllerUpdate(item.id, payload).subscribe(() => {
      this.getData();
    });
  }
}
