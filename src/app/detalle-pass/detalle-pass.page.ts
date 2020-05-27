import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalImgPage } from '../modal-img/modal-img.page';


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
  type:number;
  text:string;

  constructor(private route: ActivatedRoute, private router: Router,private modalCtrl:ModalController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.password = this.router.getCurrentNavigation().extras.state.parametros;
      }
    });
    
   }
  ngOnInit() {
    this.type=this.password.type;
    switch(this.type){
      case 0:
        this.text="Social"; break;
      case 1:
        this.text="Mail"; break; 
      case 2:
        this.text="Work"; break; 
      case 3:
        this.text="Extra"; break;    
    }
    console.log(this.type);
  }

  async openModal(){
    const modal=await this.modalCtrl.create({
      component: ModalImgPage,
    });

    await modal.present();
    const { data }= await modal.onDidDismiss();
    console.log("retorno "+ data.url);
    this.password.icon=data.url;
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
        "type":this.type,
        "icon":this.password.icon
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
