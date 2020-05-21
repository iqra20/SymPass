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

  }
  async anadirPass() {

  }


}
