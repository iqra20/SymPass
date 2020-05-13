import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  username:string;
  email:string;
  pass:String;
  passCon:string;

  constructor(private router: Router) { 
  }

  signup(){
    var id:number;
    var navigationExtras: NavigationExtras = {
      state: {
        parametros: id,
      }
    };
    this.router.navigate(['lista'], navigationExtras);
  }
  
  ngOnInit() {
  }
  
}
