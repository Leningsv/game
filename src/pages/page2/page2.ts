import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Page3Page } from "../index.pages";

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {
  page3:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page3=Page3Page;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

}
