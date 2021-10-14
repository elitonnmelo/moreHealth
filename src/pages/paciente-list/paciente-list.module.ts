import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacienteListPage } from './paciente-list';

@NgModule({
  declarations: [
    PacienteListPage,
  ],
  imports: [
    IonicPageModule.forChild(PacienteListPage),
  ],
})
export class PacienteListPageModule {}
