import { Component, OnInit, Inject } from '@angular/core';

import { ActionDispatcher, AppStartAction } from 'homeweb-ui/store';

@Component({
  selector: 'ng2app',
  template: require('./root.component.html'),
  styles: [require('./root.component.scss')],
})
export class RootComponent implements OnInit {
  constructor(private dispatcher: ActionDispatcher) {}

  ngOnInit() {
    this.dispatcher.dispatch(new AppStartAction());
  }
}
