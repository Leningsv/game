import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ResultPage } from "../index.pages";

@IonicPage()
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {
  resultPage:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.resultPage=ResultPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

}
