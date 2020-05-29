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
  color="warning";
  value=0;
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
        }else{
          this.api="POST";
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
    console.log("seguridad="+this.comprobarPassword(this.password));
    if(this.comprobarPassword(this.password)<8){
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
      console.log(newValue);
      this.seguridad=this.comprobarPassword(newValue);
      console.log("seguridad de tu pass: "+newValue);
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
    comprobarPassword(password):number{
      this.seguridad = 0;
      if (password.length!=0){
        if(this.tiene_minusculas&&this.tiene_majusculas(password)&&this.tiene_numeros(password)&&this.tiene_simbolos(password)){
          this.seguridad+=7;
        }else{
          if (this.tiene_numeros(password) && this.tiene_minusculas(password)||this.tiene_majusculas(password)){
            this.seguridad += 2;
         }
         if (this.tiene_minusculas(password) && this.tiene_majusculas(password)){
            this.seguridad += 2;
         }
         if(this.tiene_simbolos(password)){
           this.seguridad+=3;
         }
        }
        if(password.length<4){
          this.seguridad=0;
        }else{
          if (password.length >= 4 && password.length <= 5){
            this.seguridad += 1;
           }else{
              if (password.length >= 6 && password.length <= 8){
                this.seguridad += 2;
              }else{
                 if (password.length > 8){
                    this.seguridad += 3;
                 }
              }
           }
        }   
      }  
      console.log(this.seguridad);
      this.value=this.seguridad/10;
      console.log(this.value);
      if(this.value<0.5){
        this.color="danger";
      }else if(this.value<0.8){
        this.color="warning";
      }else{
        this.color="success";
      }
      return this.seguridad;        
   }   
   tiene_minusculas(password):boolean{
     for(let i=0;i<password.length;i++){
       if(password.charAt(i)>='a'&& password.charAt(i)<='z'){
        return true;
       }
     }
     return false;
   }
   tiene_majusculas(password):boolean{
    for(let i=0;i<password.length;i++){
      if(password.charAt(i)>='A'&& password.charAt(i)<='Z'){
       return true;
      }
    }
    return false;
   }
   tiene_numeros(password):boolean{
    for(let i=0;i<password.length;i++){
      if(password.charAt(i)>='0'&& password.charAt(i)<='9'){
       return true;
      }
    }
    return false;
   }
   tiene_simbolos(password):boolean{
     let simbolos:any[]=['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}','}',';',':','<',',','>','.','?','/'];
    for(let i=0;i<password.length;i++){
      if(simbolos.indexOf(password.charAt(i)!)!=-1){
       return true;
      }
    }
    return false;
   }
  }