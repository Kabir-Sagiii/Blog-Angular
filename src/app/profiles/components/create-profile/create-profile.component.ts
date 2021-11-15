import { Component, OnInit } from '@angular/core';
import {IProfile, Social} from "../../models/IProfile";
import {Store} from "@ngrx/store";
import {State} from "../../../reducers";
import * as profileActions from "../../actions/profile.actions";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  public profile:IProfile = {} as IProfile;
  public social:Social = {} as Social;
  public loading:boolean = true;
  constructor(private store:Store<State>) { }

  ngOnInit(): void {

  }

  public submitCreateProfile(){
    let profile:IProfile = {
      ...this.profile,
      ...this.social
    };
    this.store.dispatch(profileActions.createProfile({profile : profile}));
  }

}
