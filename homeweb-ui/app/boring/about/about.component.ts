import { Component, OnInit } from '@angular/core';

import {
  ActionDispatcher,
  SetNavigationActiveSectionAction,
  NavigationActiveSection,
} from 'homeweb-ui/store';

@Component({
  selector: 'about',
  template: require('./about.component.html'),
})
export class AboutComponent implements OnInit {
  constructor(private dispatcher: ActionDispatcher) {}

  ngOnInit() {
    this.dispatcher.dispatch(new SetNavigationActiveSectionAction({section: NavigationActiveSection.AboutMe}));
  }
}
