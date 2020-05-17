import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpass',
  templateUrl: './addpass.page.html',
  styleUrls: ['./addpass.page.scss'],
})
export class AddpassPage implements OnInit {
  title :string;
  username :string;
  password :string;
  link :string;
  description :string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  async cancelar(){
    
  }
  async anadirPass() {
    fetch("http://3.124.237.156:8080/password/1", {
      "method": "POST",
      "headers": {
        'Content-Type': 'application/json'
      },
      "body": JSON.stringify({
        "title": this.title,
        "username": this.username,
        "password": this.password,
        "description": this.description,
        "link": this.link,
        "type":3,
        "icon": "correo.png"
      })
    })
      .then(response => {
        console.log(response);
        this.router.navigate(['lista']);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
