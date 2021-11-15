import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {State} from "../../../reducers";
import * as userActions from '../../../users/actions/user.actions';
import * as profileActions from '../../../profiles/actions/profile.actions';
import * as userReducer from '../../../users/reducers/user.reducer';
import {IUser} from "../../../users/models/IUser";
import {UserService} from "../../../users/services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user:IUser = {} as IUser;
  constructor(private store:Store<State>,
              private userService:UserService) { }

  ngOnInit(): void {
    if(this.userService.isLoggedIn()){
      this.store.dispatch(userActions.getUserInfo());

      // get user info from the store
      this.store.pipe(select(userReducer.userFeatureKey)).subscribe((state) => {
        this.user = state.user;
      });
    }
  }

  public hasUser():boolean{
    return Object.keys(this.user).length > 0;
  }

  public loggedInUser(){
    return this.userService.isLoggedIn();
  }

  public clickLogOut(){
    this.store.dispatch(profileActions.clearProfile());
    this.store.dispatch(userActions.logOutUser());
  }

}
