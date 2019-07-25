import { Component } from '@angular/core';
import { slideInAnimation } from './animation'
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  title = 'heros';
  test = 2
  list = [
    {
      name: 'test1'
    },
    {
      name: 'test2'
    },
    {
      name: 'tyest23'
    }
  ]
}
