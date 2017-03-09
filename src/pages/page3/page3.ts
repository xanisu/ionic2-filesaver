import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { Printer, PrintOptions } from 'ionic-native';


@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
  
  }
  print() {
    if (!this.platform.is('android')) {
      alert("option only available in android device");
      return;
    }
    Printer.isAvailable().then(()=>{alert('isAvailable')}, ()=>{alert("not available")});

    let options: PrintOptions = {
        name: 'MyDocument',
        printerId: 'printer001',
        duplex: true,
        landscape: false,
        grayscale: false
      };

    Printer.print("hello world", options).then(this.onSuccess, this.onError);
  }
  onSuccess() {
    console.log("success!!");
  }
  onError() {
    console.log("error!!");
  }
}
