import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page1Page } from '../page1/page1';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
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