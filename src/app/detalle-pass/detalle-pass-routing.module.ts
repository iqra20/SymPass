import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePassPage } from './detalle-pass.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePassPageRoutingModule {}
