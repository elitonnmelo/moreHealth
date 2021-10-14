import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicoListPage } from './medico-list';

@NgModule({
  declarations: [
    MedicoListPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicoListPage),
  ],
})
export class MedicoListPageModule {}
