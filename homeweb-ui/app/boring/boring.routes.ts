import { Routes } from '@angular/router';

import { CloseNavigationGuard } from 'homeweb-ui/app/common';
import { HomepageComponent } from './homepage';
import { AboutComponent } from './about';
import { ProjectsComponent } from './projects';
import { ResumeComponent } from './resume';

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
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [CloseNavigationGuard],
  },
  {
    path: 'resume',
    component: ResumeComponent,
    canActivate: [CloseNavigationGuard],
  },
];
