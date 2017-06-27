import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any[] = [];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    for(var i = 0; i < 200; i++){
      this.items.push(i);
    }
  }


  clicked(){
    this.navCtrl.push(Page1Page);
  }
}