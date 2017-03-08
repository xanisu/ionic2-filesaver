import { Injectable } from "@angular/core";
import { Platform } from 'ionic-angular';
import  * as FileSaver  from 'file-saver';
import { File } from 'ionic-native';

@Injectable()

export class FileService {

    constructor(public platform: Platform) {

    }   

    public save(fileDestiny, fileName, fileMimeType, fileData) {
        let blob = new Blob([fileData], {type: fileMimeType});

        if (!this.platform.is('android')) {
            FileSaver.saveAs(blob, fileName); 
        } else {
            File.writeFile(fileDestiny, fileName, blob, true).then(()=> {
                alert("file created at: " + fileDestiny);
            }).catch(()=>{
            alert("error creating file at :" + fileDestiny);
        })
    }
}

    public getStorageDirectory():string {
        let src:string = "";

        if (this.platform.is('android')) {
         src = cordova.file.externalDataDirectory;
        }   

        return src;          
    }
}