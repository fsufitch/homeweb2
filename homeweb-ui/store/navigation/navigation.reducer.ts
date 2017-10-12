import { ActionReducer, Action } from '@ngrx/store';

import { NavigationState } from './navigation.state';
import * as actions from './navigation.actions';

export const NavigationReducer: ActionReducer<NavigationState> = (state=new NavigationState(), action) => {
  switch (action.type) {
    case actions.SetSideNavClosedAction.type: {
      let {closed} = (<actions.SetSideNavClosedAction>action).payload;
      state = state.setSideNavClosed(closed);
      break;
    }
    case actions.SetNavigationActiveSectionAction.type: {
      let {section} = (<actions.SetNavigationActiveSectionAction>action).payload;
      state = state.setActiveSection(section);
      break;
    }
  }
  return state;
}
