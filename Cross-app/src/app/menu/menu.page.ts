import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
   public menus = [
       {title:"Home",url:"/menu/home",icon:'home'},
       {title:"Meteo",url:"/menu/meteo",icon:'snow'},
       {title:"Gallery",url:"/menu/gellery",icon:'photos'},
       {title:"Locations",url:"/menu/locations",icon:'pin'},
       {title:"Logout",url:"logout",icon:'log-out'},
       {title:"Exit",url:"exit",icon:'power'}
   ];

  constructor(private router:Router,private authService:AuthentificationService) { }

  ngOnInit() {
  }


  onMenuItem(m){
      if(m.url=='logout') {
          this.authService.signOut();
          this.router.navigate(['login'])
      }
      else if(m.url=='exit') {
          navigator['app'].exitApp();
      }
      else
      this.router.navigate(['/'+m.url]);
  }
}
