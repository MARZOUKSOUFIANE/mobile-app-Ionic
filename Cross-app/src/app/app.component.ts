import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {AuthentificationService} from './services/authentification.service';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private authService:AuthentificationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      let firebaseConfig = {
        apiKey: "AIzaSyD4wI7rhep6eO1AgZy7RWi1x8C4HDOb9Mw",
        authDomain: "ionic-app-9ccaa.firebaseapp.com",
        databaseURL: "https://ionic-app-9ccaa.firebaseio.com",
        projectId: "ionic-app-9ccaa",
        storageBucket: "ionic-app-9ccaa.appspot.com",
        messagingSenderId: "866478278260",
        appId: "1:866478278260:web:943f32a4d5f40af7"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.login();
    });
  }

  private login() {
      this.router.navigate(['/login']);
  }
}
