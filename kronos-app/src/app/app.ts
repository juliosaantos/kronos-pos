import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './shared/menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu],
  template: `
    <app-menu>
      <router-outlet></router-outlet>
    </app-menu>
  `,
})
export class App {
  protected readonly title = signal('kronos-app');

  constructor() {
    // deixar o valor no storage e recuperar sempre apos o login
    document.documentElement.classList.add('dark-theme');
  }
}
