import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  standalone: false,
  styles: ``
})
export class MenuComponent {

  public console(): void {
    console.log('asd');
  }

}
