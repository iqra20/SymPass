import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detalle-pass',
  templateUrl: './detalle-pass.page.html',
  styleUrls: ['./detalle-pass.page.scss'],
})
export class DetallePassPage implements OnInit {
  title :string;
  username :string;
  pass :string;
  link :string;
  description :string;
  password:any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.password = this.router.getCurrentNavigation().extras.state.parametros;
      }
    });
   }
  ngOnInit() {
  }

  async Delete(){
    fetch("http://3.124.237.156:8080/password/"+this.password.id, {
      "method": "DELETE"
    })
      .then(response => {
        console.log(response);
        this.router.navigate(['lista']);
      })
      .catch(err => {
        console.log(err);
      });
    }
  async anadirPass() {
    fetch("http://3.124.237.156:8080/password/"+this.password.id, {
      "method": "PUT",
      "headers": {
        'Content-Type': 'application/json'
      },
      "body": JSON.stringify({
        "title": this.title,
        "username": this.username,
        "password": this.pass,
        "description": this.description,
        "link": this.link,
        "type":3,
        "icon":"correo.png"
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
