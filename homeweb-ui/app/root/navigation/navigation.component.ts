import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import {
  ActionDispatcher,
  NavigationStateService,
  SetSideNavClosedAction,
} from 'homeweb-ui/store';

@Component({
  selector: 'navigation',
  template: require('./navigation.component.html'),
  styles: [
    require('./navigation.component.scss'),
  ],
})
export class NavigationComponent {
  constructor(
    private dispatcher: ActionDispatcher,
    private navigationStateService: NavigationStateService,
  ) {}
  closed$ = this.navigationStateService.getSideNavClosed();

  toggleSideNav() {
    this.closed$.take(1).subscribe(closed => this.dispatcher.dispatch(
      new SetSideNavClosedAction({closed: !closed})
    ));
  }
}
