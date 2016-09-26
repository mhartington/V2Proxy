import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../provider/data';
@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [Data]
})
export class HomePage {
  public feed;
  constructor(
    public navCtrl: NavController,
    public data: Data
  ) {


  }
  ionViewDidEnter() {
    this.data.load().subscribe(
      res => this.feed = res,
      err => console.log(err),
      () => console.log('done')
    );
  }
}
