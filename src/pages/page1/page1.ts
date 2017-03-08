import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { FileService } from '../../services/file.service';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})

export class Page1 {
  storageDirectory: string = '';
  csvStr : string = '';
  constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController, private fileService: FileService) {
      var items = [
                  { name: "Item 1", color: "Green", size: "X-Large" },
                  { name: "Item 2", color: "Green", size: "X-Large" },
                  { name: "Item 3", color: "Green", size: "X-Large" }];

   this.csvStr = this.convertToCSV(items);

   console.log(this.csvStr);

   this.storageDirectory = fileService.getStorageDirectory();
}

  convertToCSV(items) {
    const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
    
    const headers = Object.keys(items[0])
    
    var csv = items.map(row => headers.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'))
    csv.unshift(headers.join(';'))

    return csv.join('\r\n'); 
  }
  saveCsv() {
      this.fileService.save(this.storageDirectory, "file.csv", "text/csv", this.csvStr);
  }
}
