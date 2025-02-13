import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  standalone: false,
  templateUrl: './basics-page.component.html',
  styles: ``
})
export class BasicsPageComponent {

  public nameLower: string = 'alejandro'
  public nameUpper: string = 'ALEJANDRO'
  public fullName: string = 'aLeJandRO rOdriGUez'

  public customDate: Date = new Date();

}
