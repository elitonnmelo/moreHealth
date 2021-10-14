import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { PacienteProvider } from '../../providers/paciente/paciente';

@IonicPage()
@Component({
  selector: 'page-paciente-list',
  templateUrl: 'paciente-list.html',
})
export class PacienteListPage {

  itemArr = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pacienteProvider: PacienteProvider,
    public modalCtrl: ModalController
    
    ) {
      this.carregaLista();
  }
  addItem() {
    this.navCtrl.push('PacienteFormPage');
  }

  editItem(_item) {
    const itemID = _item.key;
    const item = _item.value;

    this.navCtrl.push('PacienteFormPage', { itemID: itemID, item: item } );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PacienteListPage');
  }
  openFilter(){
    const modal = this.modalCtrl.create('PacienteFilterPage');
    modal.onDidDismiss(_params => {
      //console.log('chegou', _params)

      if(_params !== undefined) {
        if(_params.isLimpar) {
          this.carregaLista();
        }
        else {
          let cidade = _params.cidade;
          let uf = _params.uf;
          console.log('cidade', cidade)
          console.log('UF', uf)

          this.pacienteProvider.buscarFS(uf, cidade).subscribe(_data => {
            console.log('buscar', _data);
            this.itemArr = _data;
        });
        }
        
      }
      
    });
    modal.present();
  }
  carregaLista() {
    this.pacienteProvider.listarFS().subscribe(_data => {
      console.log(_data);
      this.itemArr = _data;
    })
  }

}
