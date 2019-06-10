import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';
import {NavParams} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService:AuthentificationService, private router:Router) { }

  error:string;

  ngOnInit() {
  }

  onLogin(user) {
    this.authService.signInUser(user.username,user.password)
        .then(()=>{
          this.router.navigate(['/menu/home']);
          this.error='';
        })
        .catch(err=>{
          this.error=err.message;
        });
  }

  onSignUp() {
    this.router.navigate(['sign-up'])
  }
}
