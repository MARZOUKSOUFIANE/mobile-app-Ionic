import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http:HttpClient) { }

  getMeteoData(city) {
   return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=10cba50b045c4edfb8797f2328782cbe')

  }
}
