import { Component, OnInit } from '@angular/core';
import {LocationService} from '../services/location.service';
import {Place} from '../model/place.model';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  public locations:Array<Place>;

  constructor(private locationService:LocationService,private router:Router,private alertCtrl: AlertController) { }

  ngOnInit() {
    this.onGetLocations();
  }

  ionViewWillEnter(){
    this.onGetLocations();
  }

    onNewLocation() {
        this.router.navigate(['/menu/new-location']);
    }


  async onRemoveLocation(p) {
    this.presentAlertConfirm(p);
      }

  async presentAlertConfirm(p) {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: ' <strong>Vous Etes Sur?</strong>!!!',
      buttons: [
        {
          text: 'OUI',
          cssClass: 'secondary',
          handler: () => {
            this.locationService.deleteLocation(p);
            let index=this.locations.indexOf(p);
            this.locations.splice(index,1);
                      }
        }, {
          text: 'NON',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  private onGetLocations() {
    this.locationService.getLocations().then(
        data=>{this.locations=data;}
    ).catch(error=>{console.log(error)});
  }


    onDetailLocation(p: Place) {
    this.locationService.currentPosition=p;
        this.router.navigate(['/menu/location-details']);
    }
}
