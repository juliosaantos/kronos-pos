import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  imports: [ButtonModule],
  templateUrl: './button.html',
})
export class Button {
  @Input() label: string = '';
  @Input() iconName: string = '';

  @Output() click: any = new EventEmitter();

  onClick() {
    this.click.emit();
  }

  convertIconName(name: string) {
    let icon;
    switch (name) {
      case 'plus':
        icon = 'pi pi-plus';
        break;
    }

    return icon;
  }

  onSelectStyle(style: string) {
    console.log(style);
  }
}
