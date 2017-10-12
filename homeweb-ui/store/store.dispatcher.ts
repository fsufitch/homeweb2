import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

import { RootState } from './root/store.service';

@Injectable()
export class ActionDispatcher {
  constructor(private store: Store<RootState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
