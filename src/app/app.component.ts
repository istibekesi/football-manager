import { Component } from '@angular/core';
import { NavigationHeaderComponent } from "./navigation-header/navigation-header.component";
import { DataService }  from "./service/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'app works!';
}
