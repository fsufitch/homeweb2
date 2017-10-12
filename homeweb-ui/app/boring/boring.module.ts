import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from 'homeweb-ui/app/common';

import { ROUTES } from './boring.routes';
import { HomepageComponent } from './homepage';
import { AboutComponent } from './about';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    HomepageComponent,
    AboutComponent,
  ],
})
export class BoringModule {}
