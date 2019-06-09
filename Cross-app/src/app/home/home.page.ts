import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contact={
    name:"Enset",
    mail:"soufianemarzouk.2017@gmail.com",
    tel:"0639211031",
    logo:"assets/images/logo.png",
    location:"assets/images/loc.png"
  }
  constructor() {}

}
