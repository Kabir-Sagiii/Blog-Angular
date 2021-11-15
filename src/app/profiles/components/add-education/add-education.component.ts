import { Component, OnInit } from '@angular/core';
import {Education, Experience} from "../../models/IProfile";
import {Store} from "@ngrx/store";
import {State} from "../../../reducers";
import * as profileActions from "../../actions/profile.actions";

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  public education:Education = {} as Education;

  constructor(private store:Store<State>) { }

  ngOnInit(): void {
  }

  public submitUpdateEducation(){
    this.store.dispatch(profileActions.addEducation({education : this.education}));
  }

}
