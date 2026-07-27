import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/operation/dashboard/dashboard';
import { NewOrder } from './pages/operation/new-order/new-order';
import { Users } from './pages/management/users/users';
import { Settings } from './pages/management/settings/settings';
import { Catalog } from './pages/registers/catalog/catalog';
import { Categories } from './pages/registers/categories/categories';
import { Customer } from './pages/registers/customer/customer';
import { Neighborhood } from './pages/registers/neighborhood/neighborhood';
import { PaymentMethod } from './pages/registers/payment-method/payment-method';

export const routes: Routes = [
  { path: '', redirectTo: 'operation/dashboard', pathMatch: 'full' },
  { path: 'login', component: Login },

  // Operation
  { path: 'operation/dashboard', component: Dashboard },
  { path: 'operation/new-order', component: NewOrder },

  // Register
  { path: 'register/catalog', component: Catalog },
  { path: 'register/categories', component: Categories },
  { path: 'register/customers', component: Customer },
  { path: 'register/neighborhoods', component: Neighborhood },
  { path: 'register/payment-methods', component: PaymentMethod },

  // Management
  { path: 'management/users', component: Users },
  { path: 'management/settings', component: Settings },
];
