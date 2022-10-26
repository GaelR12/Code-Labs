import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-server></app-server><app-server></app-server>',
  //styleUrls: ['./app.component.css']
  styles: ['
  h1 {
color:rgb(255, 0, 0)
}
']

})
export class AppComponent {
  title = 'house-app';
}
