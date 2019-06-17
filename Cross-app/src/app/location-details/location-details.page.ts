import { Component, OnInit } from '@angular/core';
import {LocationService} from '../services/location.service';
import {Place} from '../model/place.model';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {AlertController} from '@ionic/angular';


@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {
  public currentLocation: Place;

  constructor(private locationService:LocationService,private camera: Camera,private alertCtrl:AlertController) { }

  ngOnInit() {
    this.currentLocation=this.locationService.currentPosition;
  }

  async onTakePicture() {
    const options1: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true
    };
    const options2: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true
    };

    const alert = await this.alertCtrl.create({
      header: 'Confirmation!',
      message: ' <strong>Source</strong>!!!',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.getPicture(options1);
          }
        }, {
          text: 'Gallery',
          handler: () => {
            this.getPicture(options2);
          }
        }
      ]
    });

    await alert.present();
  }

  private getPicture(options: CameraOptions) {
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      //this.currentLocation.photos.push(base64Image);
      this.locationService.updateLocation(base64Image,this.currentLocation.timestamp);
    }, (err) => {
      console.log(err);
    });
  }
}
