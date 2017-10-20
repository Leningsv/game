import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';

import { CATEGORIES } from "../../assets/data/data.categories";
import { Category } from "../../intefaces/category.interface";

import { Page1Page } from "../index.pages";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  @ViewChild(Slides) slides: Slides;
  category: Category;
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

  updateJoystickClass(key:string) {
    var joystick = document.getElementById('joystick');    
    var classNames = ['joystick'];
    classNames.push(key);
    joystick.className = classNames.join(' ');
  }

  play(){
    this.updateJoystickClass('down');
    this.intervalCategories.unsubscribe();
    this.goToSlide(200,100);
    setTimeout(() => {
      //Stop the timer
      this.category=this.categories[this.slides._activeIndex];
      this.intervalCategories.unsubscribe();
      this.updateJoystickClass('');
      this.startGame(this.category);
    }, Math.random()*10000);    
    
  }
  startGame(category:Category){
    this.audio.pause();
    this.audio.src= category.audio;
    this.audio.load();
    this.audio.play();
    category.render=true;
    setTimeout(()=> {
      category.render = false
      this.navCtrl.push(Page1Page);
    }, 1000);
    console.log(category);
  }
}
