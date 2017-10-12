import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router';

import { ActionDispatcher, SetSideNavClosedAction } from 'homeweb-ui/store';

@Injectable()
export class CloseNavigationGuard implements CanActivate {
  constructor(private dispatcher: ActionDispatcher) {}

  canActivate() {
    this.dispatcher.dispatch(new SetSideNavClosedAction({closed: true}));
    return true;
  }
}
