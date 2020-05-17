import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  name:string;
  email:string;
  pass:string;
  telephone:string;

  constructor(private router: Router) { 
  }
  ngOnInit() {}
  
  check(){

    if(this.name.length*this.email.length*this.pass.length*this.telephone.length>0){
      this.signup();
    }else{
      console.log("Encontrado un campo vacio");
    }
  }
  signup() {
      fetch("http://3.124.237.156:8080/user", {
        "method": "POST",
        "headers": {
          'Content-Type': 'application/json'
        },
        "body": JSON.stringify({
          "name": this.name,
          "password": this.pass,
          "email": this.email,
          "telephone": this.telephone
        })
      })
        .then(response => {
          console.log(response);
          this.router.navigate(['home']);
        })
        .catch(err => {
          console.log(err);
        });
  }
}
