import { Action } from '@ngrx/store';

export class AppStartAction implements Action {
  static type = "homeweb/appStart";
  type = AppStartAction.type;
}
