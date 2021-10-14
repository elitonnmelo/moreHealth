import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacienteFormPage } from './paciente-form';

@NgModule({
  declarations: [
    PacienteFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PacienteFormPage),
  ],
})
export class PacienteFormPageModule {}
