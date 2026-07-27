import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoriesService, CreateCategoryDto, UpdateCategoryDto } from '../../../api';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../../shared/button/button';

import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-categories',
  imports: [CommonModule, OrderListModule, DialogModule, InputTextModule, FloatLabelModule, ReactiveFormsModule, FormsModule, ToggleSwitchModule, Button],
  templateUrl: './categories.html',
  styleUrls: ['./categories.scss'],
})
export class Categories implements OnInit {
  categoriesList: any[] = [];
  formGroup: FormGroup;
  modalOpen: boolean = false;
  isEditMode: boolean = false;

  constructor(
    private categoriesService: CategoriesService,
    private fb: FormBuilder,
  ) {
    this.formGroup = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      description: ['', Validators.required],
      order: [null, Validators.required],
      isActive: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.categoriesService.categoriesControllerFindAll().subscribe((data) => {
      this.categoriesList = data.sort((a: { order: number }, b: { order: number }) => a.order - b.order);
    });
  }

  save() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      this.formGroup.updateValueAndValidity();
      return;
    }

    const payload: CreateCategoryDto = {
      tenantId: 1,
      name: this.formGroup.value.name,
      description: this.formGroup.value.description,
      order: this.isEditMode ? this.formGroup.value.order : this.categoriesList.length + 1,
      isActive: this.formGroup.value.isActive,
    };

    if (this.isEditMode) {
      return this.categoriesService.categoriesControllerUpdate(this.formGroup.value.id, payload).subscribe(() => {
        this.closeModal();
        this.getData();
      });
    }

    return this.categoriesService.categoriesControllerCreate(payload).subscribe(() => {
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

  editCategory(category: any) {
    this.formGroup.patchValue({
      id: category.id,
      name: category.name,
      description: category.description,
      order: category.order,
      isActive: category.isActive,
    });

    this.isEditMode = true;
    this.modalOpen = true;
  }

  onChangeStatus(item: any) {
    if (!item.id) return;

    const payload: UpdateCategoryDto = {
      tenantId: 1,
      name: item.name,
      description: item.description,
      order: item.order,
      isActive: item.isActive,
    };

    this.categoriesService.categoriesControllerUpdate(item.id, payload).subscribe(() => {
      this.getData();
    });
  }
}
