import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';

import { CATEGORIES } from "../../assets/data/data.categories";
import { Category } from "../../intefaces/category.interface";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  @ViewChild(Slides) slides: Slides;
  stateCategory:boolean;
  categories:Array<any>;
  intervalCategories:any;
  audio= new Audio();
  constructor(public navCtrl: NavController) {
    this.categories=CATEGORIES.splice(0);
    this.stateCategory=true;
  }
  ngOnInit(){
    this.goToSlide(1000,500);
  }
  goToSlide(interval:number, intevalSlide:number) {
    let i=0;
    this.intervalCategories=Observable.interval(interval).subscribe(x => {
      this.slides.slideTo(i, intevalSlide);
      i++;
      if(i >= this.categories.length){
        i=0;
      }      
    });     
  }
  play(){
    this.intervalCategories.unsubscribe();
    this.goToSlide(200,100);
    setTimeout(() => {
      //Stop the timer
      this.intervalCategories.unsubscribe();
    }, 5000);    
  }
  startGame(category:Category){
    this.audio.pause();
    this.audio.src= category.audio;
    this.audio.load();
    this.audio.play();
    category.render=true;
    setTimeout(()=> category.render = false, 1000);
    console.log(category);
  }
}
