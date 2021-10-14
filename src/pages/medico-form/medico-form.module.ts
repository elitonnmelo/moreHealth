import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicoFormPage } from './medico-form';

@NgModule({
  declarations: [
    MedicoFormPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicoFormPage),
  ],
})
export class MedicoFormPageModule {}
