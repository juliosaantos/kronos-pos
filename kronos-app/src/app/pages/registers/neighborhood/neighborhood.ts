import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { Button } from '../../../shared/button/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { CreateNeighborhoodDto, NeighborhoodsService } from '../../../api';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-neighborhood',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextModule,
    DialogModule,
    Button,
    IconFieldModule,
    InputIconModule,
    ToggleSwitchModule,
    ToggleSwitchModule,
    FormsModule,
    InputNumberModule,
  ],
  templateUrl: './neighborhood.html',
  styleUrls: ['./neighborhood.scss'],
})
export class Neighborhood implements OnInit {
  formGroup: FormGroup;
  neighborhoodList: any[] = [];
  filteredNeighborhoodsList: any[] = [];
  modalOpen: boolean = false;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private neighborhoodService: NeighborhoodsService,
  ) {
    this.formGroup = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      deliveryFee: [null, Validators.required],
      estimatedDeliveryTime: [null, Validators.required],
      isActive: [null],
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.neighborhoodService.neighborhoodsControllerFindAll().subscribe((data) => {
      this.filteredNeighborhoodsList = data;
      this.neighborhoodList = data;
    });
  }

  onSearchList(event: any) {
    this.filteredNeighborhoodsList = this.neighborhoodList.filter((neighborhod) => {
      return neighborhod.name.toLowerCase().includes(event.target.value.toLowerCase());
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

  save() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      this.formGroup.updateValueAndValidity();
      return;
    }

    const payload: CreateNeighborhoodDto = {
      tenantId: 1,
      name: this.formGroup.value.name,
      deliveryFee: this.formGroup.value.deliveryFee,
      estimatedDeliveryTime: this.formGroup.value.estimatedDeliveryTime,
      isActive: this.formGroup.value.isActive,
    };

    if (this.isEditMode) {
      return this.neighborhoodService.neighborhoodsControllerUpdate(this.formGroup.value.id, payload).subscribe(() => {
        this.closeModal();
        this.getData();
      });
    }

    return this.neighborhoodService.neighborhoodsControllerCreate(payload).subscribe(() => {
      this.closeModal();
      this.getData();
    });
  }

  editNeighborhood(neighborhood: any) {
    this.formGroup.patchValue({
      id: neighborhood.id,
      name: neighborhood.name,
      deliveryFee: neighborhood.deliveryFee,
      estimatedDeliveryTime: neighborhood.estimatedDeliveryTime,
      isActive: neighborhood.isActive,
    });

    this.isEditMode = true;
    this.modalOpen = true;
  }

  toggleStatus(neighborhood: any) {
    this.neighborhoodService
      .neighborhoodsControllerUpdate(neighborhood.id, {
        isActive: neighborhood.isActive,
      })
      .subscribe(() => {
        this.getData();
      });
  }
}
