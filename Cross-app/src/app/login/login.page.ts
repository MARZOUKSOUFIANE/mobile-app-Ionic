import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService:AuthentificationService,private router:Router) { }

  ngOnInit() {
  }

  onLogin(user) {
    let res=this.authService.login(user.username,user.password);
    if(res==true)
      this.router.navigate(['/menu/home']);
    else
      this.router.navigate(['login']);
  }
}
