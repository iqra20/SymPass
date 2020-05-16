import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public passwordList:any;
  constructor(private router: Router) { 
    this.getJson();
  }
  ngOnInit() {
  }

  thisPassword(password){
    console.log(password);
    let navigationExtras: NavigationExtras = {
      state: {
        parametros: password,
      }
    };
    this.router.navigate(['detalle-pass'], navigationExtras);

  }

  async getJson(){
//    const respuesta = await fetch("../../assets/test.json");
const respuesta = await fetch("http://3.124.237.156:8080/password/1");
this.passwordList= await respuesta.json();
  }

}
