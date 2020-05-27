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
  id:string
  status:string;
  
  constructor(private router: Router) { 

  }

  async checkAccount(){
    
    fetch("http://3.124.237.156:8080/login", {
      "method": "POST",
      "headers": {
        'Content-Type': 'application/json'
      },
      "body": JSON.stringify({
        "email": this.email,
        "password": this.pass
      })
    })
      .then(response => {
        this.status=response.status.toString().substring(0,3);
        this.id=response.status.toString().substring(3);
        console.log(this.status);
        if(this.status=="200"){
          this.logIn(this.id);
        }
      })
  }

  logIn(id){
    console.log(id+" connectando..");
    let navigationExtras: NavigationExtras = {
      state: {
        parametros: id
      }
    };
    this.router.navigate(['lista'], navigationExtras);

  }
}
