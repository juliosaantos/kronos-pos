import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomersService } from '../../api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private customersService: CustomersService) {
    this.customersService.customersControllerFindAll().subscribe((res) => {
      console.log(res);
    });
  }
}
