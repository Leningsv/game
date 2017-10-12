import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Page2Page } from "../index.pages";

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  page2:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page2=Page2Page;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

}
