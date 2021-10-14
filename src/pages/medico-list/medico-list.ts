import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedicoProvider } from '../../providers/medico/medico';

/**
 * Generated class for the MedicoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medico-list',
  templateUrl: 'medico-list.html',
})
export class MedicoListPage {

  itemArr = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public medicoProvider: MedicoProvider
    
    ) {
      this.medicoProvider.listar().subscribe(_data => {
        console.log(_data);
        this.itemArr = _data;
      })
  }
  addItem() {
    this.navCtrl.push('MedicoFormPage');
  }

  editItem(_item) {
    const itemID = _item.key;
    const item = _item.value;

    this.navCtrl.push('MedicoFormPage', { itemID: itemID, item: item } );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicoListPage');
  }

}
