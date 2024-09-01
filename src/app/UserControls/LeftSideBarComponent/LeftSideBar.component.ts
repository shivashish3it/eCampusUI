import { Component, OnInit } from '@angular/core'
@Component
  ({
    // selector: 'Form_LeftSideBar',
    selector: 'app-left-sidebar',
  template: `<aside>Left Sidebar</aside>`,
    templateUrl: './LeftSideBar.component.html'
  })
export class LeftSideBarComponent implements OnInit {
  constructor() { 
  }
  ngOnInit() {
  }
}