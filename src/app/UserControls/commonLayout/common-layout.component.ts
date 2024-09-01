import { Component } from '@angular/core';

@Component({
  selector: 'app-common-layout',
  template: `
    <app-header></app-header>
    <app-left-sidebar></app-left-sidebar>
    <div class="wrapper">
    <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `
})
export class CommonLayoutComponent {}
