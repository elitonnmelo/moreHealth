import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClinicaProvider } from '../../providers/clinica/clinica';


@IonicPage()
@Component({
  selector: 'page-clinica-list',
  templateUrl: 'clinica-list.html',
})
export class ClinicaListPage {

  itemArr = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public clinicaProvider: ClinicaProvider
    
    ) {
      this.clinicaProvider.listarFS().subscribe(_data => {
        console.log(_data);
        this.itemArr = _data;
      })
  }
  addItem() {
    this.navCtrl.push('ClinicaFormPage');
  }

  editItem(_item) {
    const itemID = _item.key;
    const item = _item.value;

    this.navCtrl.push('ClinicaFormPage', { itemID: itemID, item: item } );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClinicaListPage');
  }

}