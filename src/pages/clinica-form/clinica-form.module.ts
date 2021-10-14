import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClinicaFormPage } from './clinica-form';

@NgModule({
  declarations: [
    ClinicaFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ClinicaFormPage),
  ],
})
export class ClinicaFormPageModule {}
