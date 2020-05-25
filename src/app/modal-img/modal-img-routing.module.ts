import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalImgPage } from './modal-img.page';

const routes: Routes = [
  {
    path: '',
    component: ModalImgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalImgPageRoutingModule {}
