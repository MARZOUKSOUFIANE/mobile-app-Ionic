import { Component, OnInit } from '@angular/core';
import {Place} from '../model/place.model';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {LocationService} from '../services/location.service';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.page.html',
  styleUrls: ['./new-location.page.scss'],
})
export class NewLocationPage implements OnInit {

  constructor(private geolocation: Geolocation,private locationService:LocationService,private navCtl:NavController,private router:Router) { }

  ngOnInit() {
  }

    onAddLocation(location:Place) {
        location.timestamp=new Date().getDate();
        location.photos=[];
        this.geolocation.getCurrentPosition().then((resp) => {
         location.coordinates={
           latitude: resp.coords.latitude,
           longitude:resp.coords.longitude
         }
         this.locationService.addLocation(location);
           this.router.navigate(['/menu/locations']);
       }).catch((error) => {
        console.log('Error getting location', error);
      });
    }
}
