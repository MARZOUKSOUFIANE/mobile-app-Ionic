import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
    error: string;

  constructor(private authService:AuthentificationService,private router:Router) { }

  ngOnInit() {
  }

    onCreateUser(user) {
     this.authService.signUpUser(user.username,user.password).then(
         ()=>{
           this.router.navigate(['/menu/home']);
           this.error='';
         }
     ).catch((err)=>{
       this.error=err.message;
     })
    }

    onSignIn() {
        this.router.navigate(['login']);
    }
}
