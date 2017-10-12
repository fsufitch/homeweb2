import { Record } from 'immutable';

export enum NavigationActiveSection {
  None=0,
  Home,
  AboutMe,
  Projects,
  Resume,
}

export interface NavigationState {
  sideNavClosed: boolean;
  activeSection: NavigationActiveSection;
}
export class NavigationState extends Record({
  sideNavClosed: true,
  activeSection: NavigationActiveSection.None,
}) {
  setSideNavClosed(closed: boolean) {
    return <this>this.set('sideNavClosed', closed);
  }

  setActiveSection(section: NavigationActiveSection) {
    return <this>this.set('activeSection', section);
  }
}
