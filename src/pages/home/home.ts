import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

import { CATEGORIES } from "../../assets/data/data.categories";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  categories:Array<any>;
  constructor(public navCtrl: NavController) {
    this.categories=CATEGORIES.splice(0);
  }

  goToSlide() {
    this.slides.slideTo(1, 500);
  }
  play(){
    alert('Aqui');
  }
}
