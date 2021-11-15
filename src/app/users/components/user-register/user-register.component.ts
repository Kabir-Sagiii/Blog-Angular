import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/IUser";
import {Store} from "@ngrx/store";
import {State} from "../../../reducers";
import * as utilActions from '../../../root/actions/util.actions';
import * as userActions from '../../../users/actions/user.actions';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public user:IUser = {
    name : '',
    email : '',
    password : ''
  };

  constructor(private store:Store<State>) { }

  ngOnInit(): void {
  }

  public submitRegister(){
    let {name , email , password} = this.user;
    if(name !== '' && email !== '' && password !== ''){
      this.store.dispatch(userActions.registerUser({user : this.user}));
    }
    else{
      this.store.dispatch(utilActions.setAlertUtils({message : 'Please Fill in the Fields' , color : 'danger'}));
    }
  }

}
