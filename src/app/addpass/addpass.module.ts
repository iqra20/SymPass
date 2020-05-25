import { ModalImgPageModule } from './../modal-img/modal-img.module';
import { ModalImgPage } from './../modal-img/modal-img.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpassPageRoutingModule } from './addpass-routing.module';

import { AddpassPage } from './addpass.page';

@NgModule({
  entryComponents:[
    ModalImgPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddpassPageRoutingModule,
    ModalImgPageModule
  ],
  declarations: [AddpassPage]
})
export class AddpassPageModule {}
