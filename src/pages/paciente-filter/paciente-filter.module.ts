import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacienteFilterPage } from './paciente-filter';

@NgModule({
  declarations: [
    PacienteFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(PacienteFilterPage),
  ],
})
export class PacienteFilterPageModule {}
