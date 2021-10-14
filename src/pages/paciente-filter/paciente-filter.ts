import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-paciente-filter',
  templateUrl: 'paciente-filter.html',
})
export class PacienteFilterPage {

  cidade = '';
  uf = '';
  ufArr = [
    'CE',
    'AM',
    'SP',
    'RJ',
    'SC',
    'PB',
    'RS',
    'RN'
  ]
  cidadeArr = [
    'Boa Viagem',
    'Quixeramobim',
    'Fortaleza',
    'Manaus',
    'Canidé',
    'São Paulo',
    'Rio de Janeiro'


  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PacienteFilterPage');
  }
  fechar() {
    this.viewCtrl.dismiss();
  }
  limpar() {
    const params = { 
      cidade: this.cidade,
      uf: this.uf,
      isLimpar: true
    };
    this.viewCtrl.dismiss(params);
  }
  filtrar() {
    const params = { 
      cidade: this.cidade,
      uf: this.uf,
      isLimpar: false 
    };
    this.viewCtrl.dismiss(params);
  }
}
