// the root component of the app. all other components are somehow 'nested' into this component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chanwoopark-blog';
}
