import { Injectable, Provider } from '@angular/core';
import { Store, Action } from '@ngrx/store';

import { NavigationState } from 'homeweb-ui/store/navigation/navigation.state';

export interface RootState {
  navigation: NavigationState,
}

@Injectable()
export class RootStoreService {
  constructor(private store: Store<RootState>) {}

  getStore() {
    return this.store;
  }

  getNavigation() {
    return this.store.let(s => s.select(root => root.navigation));
  }
}
