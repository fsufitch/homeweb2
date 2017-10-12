import { Routes } from '@angular/router';

import { CloseNavigationGuard } from 'homeweb-ui/app/common';
import { HomepageComponent } from './homepage';
import { AboutComponent } from './about';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomepageComponent,
    canActivate: [CloseNavigationGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [CloseNavigationGuard],
  }
];
