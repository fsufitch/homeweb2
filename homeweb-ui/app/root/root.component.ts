import { Component, OnInit } from '@angular/core';

import { fancySidebarInit } from './fancy-sidebar';

@Component({
  selector: 'ng2app',
  template: require('./root.component.html'),
  styles: [],
})
export class RootComponent implements OnInit {
  ngOnInit() {
    fancySidebarInit();
  }
}
