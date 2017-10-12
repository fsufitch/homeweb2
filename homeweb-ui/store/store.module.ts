import { NgModule } from '@angular/core';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';

import { RootStoreService } from './root/store.service';
import { ActionDispatcher } from './store.dispatcher';
import { NavigationReducer, NavigationStateService } from './navigation'

const REDUCERS = {
  navigation: NavigationReducer,
};

@NgModule({
  imports: [
    NgrxStoreModule.forRoot(REDUCERS),
  ],
  providers: [
    RootStoreService,
    ActionDispatcher,
    NavigationStateService,
  ],
  exports: [
  ]
})
export class StoreModule {}
