import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GalleryService} from '../services/gallery.service';

@Component({
  selector: 'app-gellery',
  templateUrl: './gellery.page.html',
  styleUrls: ['./gellery.page.scss'],
})
export class GelleryPage implements OnInit {
    public keyWord: string;
    public currentPage:number=1;
    public size:number=10;
    public dataImages=[];
    public totalPages: number=100;

  constructor(private http:HttpClient,private galleryService:GalleryService) { }

  ngOnInit() {
  }

  onLoadImages() {
    this.dataImages=[];
    this.currentPage=1;
    this.totalPages=0;
    this.doSearch();
  }

  doSearch(){
    this.galleryService.getImages(this.keyWord,this.currentPage,this.size)
        .subscribe(data=>{
          data['hits'].forEach(img => {
                this.dataImages.push(img);
              }
          );
          this.totalPages=data['totalHits']/this.size;
        },err=>{
          console.log(err);
        })
  }

  loadData(event) {
    if(this.currentPage<this.totalPages){
      ++this.currentPage;
      this.doSearch();
      event.target.complete();
    }
    else
      event.target.disabled=true;
  }
}
