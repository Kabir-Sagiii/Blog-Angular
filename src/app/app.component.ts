import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "./reducers";
import {UserService} from "./users/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'client';

}
