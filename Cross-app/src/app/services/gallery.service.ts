import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }

    getImages(keyword,page,size) {
        return this.http.get('https://pixabay.com/api/?key=12729864-ec577af5839947e5808e631c7&q='+keyword+'&per_page='+size+'&page='+page);
    }
}
