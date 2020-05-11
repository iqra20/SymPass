import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddpassPage } from './addpass.page';

const routes: Routes = [
  {
    path: '',
    component: AddpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddpassPageRoutingModule {}
