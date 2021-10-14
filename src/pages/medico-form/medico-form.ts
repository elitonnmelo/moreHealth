import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { MedicoProvider } from '../../providers/medico/medico';


@IonicPage()
@Component({
  selector: 'page-medico-form',
  templateUrl: 'medico-form.html',
})
export class MedicoFormPage {

  titulo = ''; 
  item = {
    nome: '',
    telefone: '',
    crm: '',
    especialidade: '',
    status: '',
  }
  itemID = undefined;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public medicoProvider: MedicoProvider,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
    ) {
      const itemID = this.navParams.get('itemID');
      const item = this.navParams.get('item');

      if(itemID) {
        this.item = item;
        this.itemID = itemID;
        this.titulo = 'Atualizar';

      } 
      else {
        this.itemID = undefined;
        this.item = {
          nome: '',
          telefone: '',
          crm: '',
          especialidade: '',
          status: '',
        }
        this.titulo = 'Inserir';
      }
      
    }
  

  ionViewDidLoad() {   
  }
  salvar() {
    console.log(this.item);
    if(this.itemID) { //atualizar
      this.medicoProvider.atualizar(this.itemID, this.item).then(_ => {
        this.presentTost('Medico atualizado com sucesso');
      })
    } else { //inserir
      this.medicoProvider.inserir(this.item).then(_ =>{
        this.presentTost('Medico inserido com sucesso');
        this.navCtrl.pop();
      });
    }


  }
  excluir() {

    const confirm = this.alertCtrl.create({
      title: 'Excluir?',
      message: 'Tem certeza que deseja excluir este medico?',
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
            this.medicoProvider.remover(this.itemID)
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