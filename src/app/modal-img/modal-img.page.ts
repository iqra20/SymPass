import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-img',
  templateUrl: './modal-img.page.html',
  styleUrls: ['./modal-img.page.scss'],
})
export class ModalImgPage implements OnInit {

  iconList:any;
  url:string;
  constructor(private modalCtrl:ModalController) { 
    this.getJson();
  }
  ngOnInit() {
  }

  getImage(icon){

    this.url=icon.url;
    console.log("me voy del modal con: "+this.url)
    this.modalCtrl.dismiss({
      url: this.url
    })
  }

  close(){
    this.modalCtrl.dismiss();
  }
  async getJson(){
    const respuesta = await fetch("../../assets/icons.json");
    this.iconList= await respuesta.json();
  }
}
