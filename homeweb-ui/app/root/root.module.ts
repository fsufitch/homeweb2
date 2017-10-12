import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from 'homeweb-ui/app/common';

import { RootComponent } from './root.component';
import { NavigationComponent } from './navigation';
import { ROUTES } from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  declarations: [
    RootComponent,
    NavigationComponent,
  ],
  bootstrap: [
    RootComponent,
  ],
})
export class RootModule {}
