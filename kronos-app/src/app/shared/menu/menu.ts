import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { SelectModule } from 'primeng/select';
import { RouterModule } from '@angular/router';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-menu',
  imports: [
    MenuModule,
    BadgeModule,
    RouterModule,
    SelectModule,
    InputGroupModule,
    InputGroupAddonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ButtonModule,
    PopoverModule,
  ],
  providers: [MessageService],
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss'],
})
export class Menu {
  model: MenuItem[] | undefined;
  menuOpen: boolean = true;
  darkMode: boolean = true;
  stores = [
    { name: 'Loja Centro', id: 1 },
    { name: 'Loja Delivery', id: 2 },
  ];
  itemsSideMenu = [
    { label: 'Configurações', icon: 'pi pi-fw pi-cog', routerLink: '/management/settings' },
    { label: 'Usuários', icon: 'pi pi-fw pi-user', routerLink: '/management/users' },
    { label: 'Sair', icon: 'pi pi-fw pi-sign-out', routerLink: '/login' },
  ];
  userName: string = 'Julio Santos';
  userRole: string = 'Proprietário';

  constructor() {
    this.loadMenu();
  }

  private loadMenu() {
    this.model = [
      {
        separator: true,
      },
      {
        label: 'Operacional',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: '/operation/dashboard',
          },
          {
            label: 'Novo Pedido',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/operation/new-order',
          },
          {
            label: 'Em andamento',
            icon: 'pi pi-fw pi-list',
            routerLink: '/operation/orders',
          },
          {
            label: 'Histórico',
            icon: 'pi pi-fw pi-history',
            routerLink: '/operation/history',
          },
          {
            label: 'Caixa',
            icon: 'pi pi-fw pi-money-bill',
            routerLink: '/operation/cash-register',
          },
        ],
      },
      {
        label: 'Cadastros',
        items: [
          {
            label: 'Cardápio',
            icon: 'pi pi-fw pi-credit-card',
            routerLink: '/register/catalog',
          },
          {
            label: 'Categorias',
            icon: 'pi pi-fw pi-tag',
            routerLink: '/register/categories',
          },
          {
            label: 'Clientes',
            icon: 'pi pi-fw pi-user',
            routerLink: '/register/customers',
          },
          {
            label: 'Bairros e taxas',
            icon: 'pi pi-fw pi-map-marker',
            routerLink: '/register/neighborhoods',
          },
          {
            label: 'Formas de pagamento',
            icon: 'pi pi-fw pi-credit-card',
            routerLink: '/register/payment-methods',
          },
        ],
      },
      {
        label: 'Gestão',
        items: [
          {
            label: 'Usuários',
            icon: 'pi pi-fw pi-user',
            routerLink: '/management/users',
          },
          {
            label: 'Permissões',
            icon: 'pi pi-fw pi-key',
            routerLink: '/management/permissions',
          },
          {
            label: 'Configurações',
            icon: 'pi pi-fw pi-cog',
            routerLink: '/management/settings',
          },
        ],
      },
    ];
  }

  onToggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onToggleTheme() {
    this.darkMode = !this.darkMode;

    this.darkMode ? document.documentElement.classList.add('dark-theme') : document.documentElement.classList.remove('dark-theme');
  }
}
