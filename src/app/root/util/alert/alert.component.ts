import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {State} from "../../../reducers";
import * as utilReducer from '../../../root/reducers/util.reducer';
import {AlertMessage} from "../../../root/reducers/util.reducer";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  public messages:AlertMessage[] = [] as AlertMessage[];

  constructor(private store:Store<State>) { }

  ngOnInit(): void {
    this.store.pipe(select(utilReducer.utilFeatureKey)).subscribe((state) => {
      this.messages = state.messages;
    });

  }

}
