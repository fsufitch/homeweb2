import { Component, OnInit } from '@angular/core';

import {
  ActionDispatcher,
  SetNavigationActiveSectionAction,
  NavigationActiveSection,
} from 'homeweb-ui/store';

@Component({
  selector: 'homepage',
  template: require('./homepage.component.html'),
})
export class HomepageComponent implements OnInit {
  constructor(private dispatcher: ActionDispatcher) {}

  ngOnInit() {
    this.dispatcher.dispatch(new SetNavigationActiveSectionAction({section: NavigationActiveSection.Home}));
  }
}
