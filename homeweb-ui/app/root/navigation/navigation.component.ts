import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'navigation',
  template: require('./navigation.component.html'),
  styles: [
    require('./navigation.component.scss'),
  ],
})
export class NavigationComponent {
  closed = false;

  ngOnInit() {
    Observable.timer(0, 2000).subscribe(() => this.closed = !this.closed);
  }
}
