import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public id:string;
  public passwordList:any;
  constructor(private router: Router,private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.parametros;
        console.log("en listado estoy"+this.id);
        this.getJson("http://3.124.237.156:8080/password/"+this.id);
      }
    });
  }
  ngOnInit() {
  }

  thisPassword(password){
    console.log(password);
    let navigationExtras: NavigationExtras = {
      state: {
        parametros: password
      }
    };
    this.router.navigate(['detalle-pass'], navigationExtras);

  }

  async getJson(apiConnection){
//    const respuesta = await fetch("../../assets/test.json");
const respuesta = await fetch(apiConnection);
this.passwordList= await respuesta.json();
  }

}
