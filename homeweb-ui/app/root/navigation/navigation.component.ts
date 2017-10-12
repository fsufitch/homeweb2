import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import {
  ActionDispatcher,
  NavigationStateService,
  SetSideNavClosedAction,
  NavigationActiveSection,
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

  private activeSection$ = this.navigationStateService.getActiveSection();
  homeActive$ = this.activeSection$.map(s => s === NavigationActiveSection.Home);
  aboutMeActive$ = this.activeSection$.map(s => s === NavigationActiveSection.AboutMe);

  toggleSideNav() {
    this.closed$.take(1).subscribe(closed => this.dispatcher.dispatch(
      new SetSideNavClosedAction({closed: !closed})
    ));
  }
}
