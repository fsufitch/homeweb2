import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';

import { NavigationState } from './navigation.state';
import { RootStoreService } from 'homeweb-ui/store/root/store.service';

@Injectable()
export class NavigationStateService {
  constructor(private rootStoreService: RootStoreService) {}
  navigationState$ = this.rootStoreService.getNavigation();

  getSideNavClosed() {
    return this.navigationState$.select(s => s.sideNavClosed);
  }

  getActiveSection() {
    return this.navigationState$.select(s => s.activeSection);
  }
}
