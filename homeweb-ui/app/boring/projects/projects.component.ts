import { Component, OnInit } from '@angular/core';

import {
  ActionDispatcher,
  SetNavigationActiveSectionAction,
  NavigationActiveSection,
} from 'homeweb-ui/store';

@Component({
  selector: 'projects',
  template: require('./projects.component.html'),
})
export class ProjectsComponent implements OnInit {
  constructor(private dispatcher: ActionDispatcher) {}

  ngOnInit() {
    this.dispatcher.dispatch(new SetNavigationActiveSectionAction({section: NavigationActiveSection.Projects}));
  }
}
