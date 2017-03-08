import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { FileService } from '../../services/file.service';


@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  storageDirectory: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private fileService: FileService) {
     this.storageDirectory = fileService.getStorageDirectory();
  
  }
  saveFile() {
    let table = "<table><thead><tr><th>A</th><th>B</th><th>C</th></tr></thead><tbody>    <tr><td>1</td><td>2</td><td>3</td></tr>    <tr><td>1</td><td>2</td><td>3</td></tr>    <tr><td>1</td><td>2</td><td>3</td></tr>    <tr><td>1</td><td>2</td><td>3</td></tr>    </tbody>    </table>";
    this.fileService.save(this.storageDirectory, "export.xls", "application/vnd.ms-excel", table);
  }

}
