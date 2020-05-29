import { ModalImgPage } from './../modal-img/modal-img.page';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addpass',
  templateUrl: './addpass.page.html',
  styleUrls: ['./addpass.page.scss'],
})
export class AddpassPage implements OnInit {
  seguridad:number;
  title :string;
  type:number;
  api:"POST";
  username :string;
  password :string;
  pass:any;
  link :string;
  description :string;
  icon:string="../../assets/icon/img.png";
  color:string;
  constructor(private router: Router,private route: ActivatedRoute,private modalCtrl:ModalController) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.id;
        this.pass=this.router.getCurrentNavigation().extras.state.parametros;
        console.log("en añadir pass estoy"+this.id);
        console.log(this.pass);
        if(this.pass){
          this.title=this.pass.title;
          this.type=this.pass.type;
          this.username=this.pass.username;
          this.password=this.pass.password;
          this.link=this.pass.link;
          this.description=this.pass.description;
          this.icon=this.pass.icon;
          this.api=this.router.getCurrentNavigation().extras.state.api;
          this.id=this.pass.id;
        }
      }
    });
  }
  public id :string;

  caracteres="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={[}};:<,>.?/";



  ngOnInit() {
  }

  generatePass(){
    console.log("entro");
    this.password="";
    console.log("pass vacia");
    const num=Math.floor(Math.random() * 8) + 7;
    console.log("length pass decidida="+num);
    for(let i=0;num>i;i++){
      console.log("dentro de bucle n:"+1)
      this.password+=this.caracteres.charAt(Math.floor(Math.random()*this.caracteres.length));
    }
    console.log("pass aleatoria= "+this.password)
    console.log("seguridad="+this.comprobarPassword());
    if(this.comprobarPassword()<10){
      console.log("falta seguridad..")
      this.generatePass();
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
   console.log("añadir pas");
   console.log(this.api);    
    fetch("http://3.124.237.156:8080/password/"+this.id, {
      "method": this.api,
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
    onKey(newValue) {
      this.seguridad=this.comprobarPassword();
      console.log("seguridad de tu pass");
      if(this.seguridad>9){
        console.log("pass fuerte");
      }else{
        if(this.seguridad>5){
          console.log("pass mediana")
        }else{
          console.log("pass debil")
        }
      }
  }
    comprobarPassword():number{
      this.seguridad = 0;
      if (this.password.length!=0){
        if(this.tiene_minusculas&&this.tiene_majusculas()&&this.tiene_numeros()&&this.tiene_simbolos()){
          this.seguridad+=7;
        }else{
          if (this.tiene_numeros() && this.tiene_minusculas()||this.tiene_majusculas){
            this.seguridad += 2;
         }
         if (this.tiene_minusculas() && this.tiene_majusculas()){
            this.seguridad += 2;
         }
         if(this.tiene_simbolos()){
           this.seguridad+=2;
         }
        }
        if(this.password.length<4){
          this.seguridad=0;
        }else{
          if (this.password.length >= 4 && this.password.length <= 5){
            this.seguridad += 2;
           }else{
              if (this.password.length >= 6 && this.password.length <= 8){
                this.seguridad += 3;
              }else{
                 if (this.password.length > 8){
                    this.seguridad += 5;
                 }
              }
           }
        }   
      }  
      return this.seguridad;        
   }   
   tiene_minusculas():boolean{
     for(let i=0;i<this.password.length;i++){
       if(this.password.charAt(i)>='a'&& this.password.charAt(i)<='z'){
        return true;
       }
     }
     return false;
   }
   tiene_majusculas():boolean{
    for(let i=0;i<this.password.length;i++){
      if(this.password.charAt(i)>='A'&& this.password.charAt(i)<='Z'){
       return true;
      }
    }
    return false;
   }
   tiene_numeros():boolean{
    for(let i=0;i<this.password.length;i++){
      if(this.password.charAt(i)>='0'&& this.password.charAt(i)<='9'){
       return true;
      }
    }
    return false;
   }
   tiene_simbolos():boolean{
     let simbolos:any[]=['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}','}',';',':','<',',','>','.','?','/'];
    for(let i=0;i<this.password.length;i++){
      if(simbolos.indexOf(this.password.charAt(i)!)!=-1){
       return true;
      }
    }
    return false;
   }
  }