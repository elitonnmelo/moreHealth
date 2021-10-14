import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnderecoFormPage } from './endereco-form';

@NgModule({
  declarations: [
    EnderecoFormPage,
  ],
  imports: [
    IonicPageModule.forChild(EnderecoFormPage),
  ],
})
export class EnderecoFormPageModule {}
