import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string;
  pass:string; 

  constructor(private router: Router) { 

  }
  signIn(){
    var id:number; 
    var navigationExtras: NavigationExtras = {
      state: {
        parametros: id,
      }
    };
    this.router.navigate(['lista'], navigationExtras);
  }
    
}
