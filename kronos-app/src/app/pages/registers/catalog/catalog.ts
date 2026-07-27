import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoriesService, CreateProductDto, ProductsService, UpdateProductDto } from '../../../api';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { Button } from '../../../shared/button/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-catalog',
  imports: [
    CommonModule,
    InputIconModule,
    IconFieldModule,
    Button,
    DialogModule,
    FloatLabelModule,
    ReactiveFormsModule,
    ToggleSwitchModule,
    SelectModule,
    InputNumberModule,
    InputTextModule,
    InputNumberModule,
    FormsModule,
  ],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.scss'],
})
export class Catalog implements OnInit {
  productsList: any[] = [];
  categoriesList: any[] = [];
  isEditMode: boolean = false;
  modalOpen: boolean = false;
  formGroup: FormGroup;
  selectedCategoryId: number | null = null;
  filteredProducts: any[] = [];

  constructor(
    private productService: ProductsService,
    private categoryService: CategoriesService,
    private fb: FormBuilder,
  ) {
    this.formGroup = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: [null, Validators.required],
      price: [null, Validators.required],
      imageUrl: [''],
      isActive: [null],
    });
  }

  ngOnInit(): void {
    this.getData();
    this.getCategories();
  }

  getData() {
    this.productService.productsControllerFindAll().subscribe((data) => {
      this.productsList = data;
      this.filteredProducts = data;
    });
  }

  getCategories() {
    this.categoryService.categoriesControllerFindAll().subscribe((data) => {
      this.categoriesList = data;
    });
  }

  getCategoryName(id: number) {
    const category = this.categoriesList.find((category) => category.id === id);
    return category ? category.name.toUpperCase() : '';
  }

  editProduct(product: any) {
    this.formGroup.patchValue({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
      isActive: product.isAvailable,
      categoryId: product.categoryId,
    });

    this.isEditMode = true;
    this.modalOpen = true;
  }

  filterByCategory(categoryId: number | null): void {
    this.selectedCategoryId = categoryId;

    if (categoryId === null) {
      this.filteredProducts = this.productsList;
      return;
    }

    this.filteredProducts = this.productsList.filter((product) => product.categoryId === categoryId);
  }

  onSearchProducts(event: any) {
    this.filteredProducts = this.productsList.filter((product) => product.name.toLowerCase().includes(event.target.value.toLowerCase()));
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

    const payload: CreateProductDto = {
      tenantId: 1,
      categoryId: this.formGroup.value.categoryId,
      name: this.formGroup.value.name,
      description: this.formGroup.value.description,
      price: this.formGroup.value.price,
      imageUrl: this.formGroup.value.imageUrl,
      isAvailable: this.formGroup.value.isActive == null ? false : this.formGroup.value.isActive,
    };

    if (this.isEditMode) {
      return this.productService.productsControllerUpdate(this.formGroup.value.id, payload).subscribe(() => {
        this.closeModal();
        this.getData();
      });
    }

    return this.productService.productsControllerCreate(payload).subscribe(() => {
      this.closeModal();
      this.getData();
    });
  }

  onChangeStatus(item: any) {
    if (!item.id) return;

    const payload: UpdateProductDto = {
      tenantId: 1,
      categoryId: item.categoryId,
      name: item.name,
      description: item.description,
      price: item.price,
      imageUrl: item.imageUrl,
      isAvailable: item.isAvailable,
    };

    this.productService.productsControllerUpdate(item.id, payload).subscribe(() => {
      this.getData();
    });
  }
}
