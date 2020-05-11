import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePassPageRoutingModule } from './detalle-pass-routing.module';

import { DetallePassPage } from './detalle-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePassPageRoutingModule
  ],
  declarations: [DetallePassPage]
})
export class DetallePassPageModule {}
