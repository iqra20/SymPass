import { ModalImgPage } from './../modal-img/modal-img.page';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addpass',
  templateUrl: './addpass.page.html',
  styleUrls: ['./addpass.page.scss'],
})
export class AddpassPage implements OnInit {
  title :string;
  type:number;
  username :string;
  password :string;
  link :string;
  description :string;
  icon:string="../../assets/icon/img.png";
  constructor(private router: Router,private route: ActivatedRoute,private modalCtrl:ModalController) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.parametros;
        console.log("en añadir pass estoy"+this.id);
      }
    });
  }
  public id :string;

  caracteres="a";



  ngOnInit() {
  }

  generatePass(){
    this.password="";
    const num=Math.floor(Math.random() * 8) + 7;
    for(let i=0;num>0;i++){
      this.password+=this.caracteres.charAt(Math.floor(Math.random()*this.caracteres.length));
    }
  }

  async openModal(){
    const modal=await this.modalCtrl.create({
      component: ModalImgPage,
    });

    await modal.present();
    const { data }= await modal.onDidDismiss();
    console.log("retorno "+ data.url);
    this.icon=data.url;
    console.log(this.icon);
  }

  async cancelar(){
    
  }

  async anadirPass() {
    fetch("http://3.124.237.156:8080/password/"+this.id, {
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
        "type":this.type,
        "icon": this.icon
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