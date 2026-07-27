import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateCustomerDto, CustomersService, NeighborhoodsService } from '../../../api';

import { Button } from '../../../shared/button/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'app-customer',
  imports: [
    CommonModule,
    Button,
    IconFieldModule,
    InputIconModule,
    ReactiveFormsModule,
    DialogModule,
    FloatLabelModule,
    SelectModule,
    ToggleSwitchModule,
    InputTextModule,
    InputMaskModule,
  ],
  templateUrl: './customer.html',
  styleUrls: ['./customer.scss'],
})
export class Customer implements OnInit {
  customerList: any[] = [];
  filteredCustomers: any[] = [];
  neighborhoodList: any[] = [];
  modalOpen: boolean = false;
  isEditMode: boolean = false;
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomersService,
    private neighborhoodService: NeighborhoodsService,
  ) {
    this.formGroup = this.fb.group({
      id: [null],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      document: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      complement: [''],
      reference: [''],
      neighborhoodId: [null, Validators.required],
      isActive: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.customerService.customersControllerFindAll().subscribe((customers) => {
      this.customerList = customers;
      this.filteredCustomers = customers;
    });
  }

  getNeighborhoods() {
    this.neighborhoodService.neighborhoodsControllerFindAll().subscribe((neighborhoods) => {
      this.neighborhoodList = neighborhoods;
    });
  }

  onSearchCustomers(event: any) {
    this.filteredCustomers = this.customerList.filter((customer) => {
      return customer.firstName.toLowerCase().includes(event.target.value.toLowerCase()) || customer.lastName.toLowerCase().includes(event.target.value.toLowerCase());
    });
  }

  save() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      this.formGroup.updateValueAndValidity();
      return;
    }

    const payload: CreateCustomerDto = {
      tenantId: 1,
      firstName: this.formGroup.value.firstName,
      lastName: this.formGroup.value.lastName,
      phone: this.formGroup.value.phone,
      email: this.formGroup.value.email,
      document: this.formGroup.value.document,
      neighborhoodId: this.formGroup.value.neighborhoodId,
      address: this.formGroup.value.address,
      number: this.formGroup.value.number,
      complement: this.formGroup.value.complement,
      reference: this.formGroup.value.reference,
      isActive: this.formGroup.value.isActive,
    };

    if (this.isEditMode) {
      return this.customerService.customersControllerUpdate(this.formGroup.value.id, payload).subscribe(() => {
        this.closeModal();
        this.getData();
      });
    }

    return this.customerService.customersControllerCreate(payload).subscribe(() => {
      this.closeModal();
      this.getData();
    });
  }

  editCustomer(customer: any) {
    this.formGroup.patchValue({
      id: customer.id,
      firstName: customer.firstName,
      lastName: customer.lastName,
      phone: customer.phone,
      email: customer.email,
      document: customer.document,
      address: customer.address,
      number: customer.number,
      complement: customer.complement,
      reference: customer.reference,
      isActive: customer.isActive,
      neighborhoodId: customer.neighborhoodId,
    });

    this.isEditMode = true;
    this.openModal();
  }

  openModal() {
    this.modalOpen = true;

    this.getNeighborhoods();
  }

  closeModal() {
    this.formGroup.reset();
    this.modalOpen = false;
    this.isEditMode = false;
  }

  getInitLetterFullName(firstName: string, lastName: string) {
    if (!firstName || !lastName) return '';

    return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  }
}
