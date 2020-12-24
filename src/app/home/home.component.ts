import { Component, OnInit } from '@angular/core';
import dataJSON from '../../assets/data.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  JSONData: Array<any>;
  resData: any;
  viewTable = false;
  keyData: any;

  ngOnInit(): void {
    this.JSONData = dataJSON;
  }

  public conToObj(obj) {

    return { obj };
  }

  public getKeys(obj) {

    return Object.keys(obj);
  }

  public getEntries(obj) {
    return Object.entries(obj);
  }

  public getValues(obj) {
    return Object.values(obj);
  }
  public isValue(obj) {
    return (typeof (obj) === 'string' || typeof (obj) === 'number') ? true : false;
  }

  public saveData(obj, keys) {
    this.resData = obj;
    this.keyData = keys;
  
    setTimeout(() => {
      this.viewTable = true;
    }, 100);
  
  }
}




