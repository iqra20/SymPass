import { ModalImgPageModule } from './../modal-img/modal-img.module';
import { ModalImgPage } from './../modal-img/modal-img.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePassPageRoutingModule } from './detalle-pass-routing.module';

import { DetallePassPage } from './detalle-pass.page';


@NgModule({
  entryComponents:[
    ModalImgPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePassPageRoutingModule,
    ModalImgPageModule
  ],
  declarations: [DetallePassPage]
})
export class DetallePassPageModule {}
