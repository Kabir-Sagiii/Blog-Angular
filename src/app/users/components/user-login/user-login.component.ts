import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/IUser";
import {Store} from "@ngrx/store";
import {State} from "../../../reducers";
import * as utilActions from '../../../root/actions/util.actions';
import * as userActions from '../../../users/actions/user.actions';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public user:IUser = {
    name : '',
    email : '',
    password : ''
  };

  constructor(private store:Store<State>) { }

  ngOnInit(): void {
  }

  public submitLogin(){
    let {email , password} = this.user;
    if(email !== '' && password !== ''){
      this.store.dispatch(userActions.loginUser({user : this.user}));
    }
    else{
      this.store.dispatch(utilActions.setAlertUtils({message : 'Please Fill in the Fields' , color : 'danger'}));
    }
  }
}
