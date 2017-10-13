import { Component, OnInit } from '@angular/core';

import {
  ActionDispatcher,
  SetNavigationActiveSectionAction,
  NavigationActiveSection,
} from 'homeweb-ui/store';

@Component({
  selector: 'resume',
  template: require('./resume.component.html'),
})
export class ResumeComponent implements OnInit {
  constructor(private dispatcher: ActionDispatcher) {}

  ngOnInit() {
    this.dispatcher.dispatch(new SetNavigationActiveSectionAction({section: NavigationActiveSection.Resume}));
  }
}
