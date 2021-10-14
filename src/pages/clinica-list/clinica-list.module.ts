import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClinicaListPage } from './clinica-list';

@NgModule({
  declarations: [
    ClinicaListPage,
  ],
  imports: [
    IonicPageModule.forChild(ClinicaListPage),
  ],
})
export class ClinicaListPageModule {}
