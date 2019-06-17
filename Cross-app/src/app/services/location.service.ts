import { Injectable } from '@angular/core';
import {Place} from '../model/place.model';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public locations:Array<Place>=[];
  public currentPosition: Place;

  constructor(private storage:Storage) {
  }

  public getLocations(){
    return this.storage.get("locations").then(
        data=>{
          this.locations=data!=null?data:[];
          return this.locations.slice();
        }
    )
  }

  public addLocation(place:Place){
    this.locations.push(place);
    this.storage.set("locations",this.locations);
  }

  public deleteLocation(p){
      let index=this.locations.indexOf(p);
      this.locations.splice(index,1);
      this.updateLocations();
  }

    private updateLocations() {
        this.storage.set("locations",this.locations);
    }


    updateLocation(base64Image: string, timestamp: number) {
        for(let i=0;i<this.locations.length;i++){
            if(this.locations[i].timestamp==timestamp){
                this.locations[i].photos.push(base64Image);
                this.updateLocations();
                break;
            }
        }
    }
}
