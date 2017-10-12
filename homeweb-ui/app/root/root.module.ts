import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from 'homeweb-ui/app/common';
import { BoringModule } from 'homeweb-ui/app/boring';

import { RootComponent } from './root.component';
import { NavigationComponent } from './navigation';

@NgModule({
  imports: [
    CommonModule,
    BoringModule,
    RouterModule.forRoot([], {useHash: false}),
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
