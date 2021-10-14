import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { ClinicaProvider } from '../../providers/clinica/clinica';

import { Clinica } from '../../models/clinica';

/**
 * Generated class for the ClinicaFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clinica-form',
  templateUrl: 'clinica-form.html',
})
export class ClinicaFormPage {

  titulo = ''; 
  /*item = {
    nome: '',
    cidade: '',
    endereco: '',
    uf: '',
    lat: '',
    lng: '',
  }*/
  item = new Clinica();
  itemID = undefined;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public clinicaProvider: ClinicaProvider,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
    ) {
      const itemID = this.navParams.get('itemID');
      const item = this.navParams.get('item');

      if(itemID) {
        this.item = item;
        this.itemID = itemID;
        this.titulo = 'Atualizar';

      } else {
        this.itemID = undefined;
        /*this.item = {
          nome: '',
          cidade: '',
          endereco: '',
          uf: '',
          lat: '',
          lng: '',
        }*/
        this.item = new Clinica();
        this.titulo = 'Inserir';
      }
      
    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicoFormPage');
  }
  salvar() {
    console.log(this.item);
    this.item.lat = parseFloat(this.item.lat + '');
    this.item.lng = parseFloat(this.item.lng + '');
    if(this.itemID) { //atualizar
      this.clinicaProvider.atualizarFS(this.itemID, this.item).then(_ => {
        this.presentTost('Clinnica atualizada com sucesso');
      })
    } else { //inserir
      this.clinicaProvider.inserirFS(this.item).then(_ =>{
        this.presentTost('Clinica inserida com sucesso');
        this.navCtrl.pop();
      });
    }


  }
  excluir() {

    const confirm = this.alertCtrl.create({
      title: 'Excluir?',
      message: 'Tem certeza que deseja excluir esta clinica?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            this.clinicaProvider.removerFS(this.itemID)
              .then(_ => {
                console.log('Ok');
              })
              .catch(error => {
                console.log('Erro', error);
              })
          }
        }
      ]
    });
    confirm.present();
  }
  presentTost(mensagem) {
    const toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      position: 'position',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
}