import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCommonPageRoutingModule } from './form-common-routing.module';

import { FormCommonPage } from './form-common.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCommonPageRoutingModule
  ],
  declarations: [FormCommonPage]
})
export class FormCommonPageModule {}
