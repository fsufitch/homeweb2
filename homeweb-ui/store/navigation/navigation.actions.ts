import { Action } from '@ngrx/store';

import { NavigationActiveSection } from './navigation.state';

export class SetSideNavClosedAction implements Action {
  static type = 'homeweb/navigation/setSideNavClosed';
  type = SetSideNavClosedAction.type;
  constructor(public payload: {closed: boolean}) {}
}

export class SetNavigationActiveSectionAction implements Action {
  static type = 'homeweb/navigation/setActiveSection';
  type = SetNavigationActiveSectionAction.type;
  constructor(public payload: {section: NavigationActiveSection}) {}
}
