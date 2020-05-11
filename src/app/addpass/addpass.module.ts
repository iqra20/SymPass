import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpassPageRoutingModule } from './addpass-routing.module';

import { AddpassPage } from './addpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddpassPageRoutingModule
  ],
  declarations: [AddpassPage]
})
export class AddpassPageModule {}
