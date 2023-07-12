import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {

  constructor( private location: Location) {}

  back(): void{
    this.location.back();
  }
}
