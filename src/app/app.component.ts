import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
