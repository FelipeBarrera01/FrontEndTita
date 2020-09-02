import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCommonPage } from './form-common.page';

const routes: Routes = [
  {
    path: '',
    component: FormCommonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCommonPageRoutingModule {}
