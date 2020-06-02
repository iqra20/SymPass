import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
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
  id:string;
  text:string;

  showPassword= false;
  passwordToggleIcon = 'eye-off';

  constructor(private route: ActivatedRoute, private router: Router,private modalCtrl:ModalController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.password = this.router.getCurrentNavigation().extras.state.parametros;
        this.id=this.router.getCurrentNavigation().extras.state.id;
        console.log(this.password);
        console.log(this.id);
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

  togglePassword():void{
    this.showPassword=!this.showPassword;

    if(this.passwordToggleIcon=='eye'){
      this.passwordToggleIcon='eye-off';
    }else{
      this.passwordToggleIcon='eye';
    }
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

  delete(){
    const alert = document.createElement('ion-alert');
    alert.header = 'Warning';
    alert.message = 'Are you sure you want to delete this password?';
    alert.buttons = [
      {text:'Cancel'},
      {text:'Delete',handler:()=>{this.deletePass()}}];
    document.body.appendChild(alert);
    return alert.present();
    }
    async deletePass(){
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

  anadirPass() {
    console.log("editando...");
    console.log(this.password);
    let navigationExtras: NavigationExtras = {
      state: {
        parametros: this.password,
        id:this.id,
        api:"PUT"

      }
    };
    this.router.navigate(['addpass'], navigationExtras);
  
    }
}
