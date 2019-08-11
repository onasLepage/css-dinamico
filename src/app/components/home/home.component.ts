import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <br>
  <app-css></app-css>
  <br>
  <app-clases></app-clases>
  <br><br>
  <app-ng-switch></app-ng-switch>

  <p [appResaltado]="'orange'"> que mas ?</p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
