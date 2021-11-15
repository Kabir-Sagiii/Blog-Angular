import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {State} from "../../../reducers";
import * as developerActions from '../../actions/developer.actions';
import * as developerReducer from '../../reducers/developer.reducer';
import {IDeveloper} from "../../models/IDeveloper";

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {

  public developers:IDeveloper[] = [] as IDeveloper[];
  public loading:boolean;
  constructor(private store:Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(developerActions.loadDevelopers());

    // get developer Info from Redux Store
    this.store.pipe(select(developerReducer.developerFeatureKey)).subscribe((state) => {
      this.developers = state.developers;
      this.loading = state.loading;
    });
  }

}
