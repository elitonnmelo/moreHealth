import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { PacienteProvider } from '../../providers/paciente/paciente';



@IonicPage()
@Component({
  selector: 'page-paciente-form',
  templateUrl: 'paciente-form.html',
})
export class PacienteFormPage {

  titulo = ''; 
  item = {
    nome: '',
    telefone: '',
    endereco: '',
    cidade: '',
    uf: '',
    convenio: '',
    status: '',
  }
  itemID = undefined;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pacienteProvider: PacienteProvider,
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
          endereco: '',
          cidade: '',
          uf: '',
          convenio: '',
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
      //this.pacienteProvider.atualizar(this.itemID, this.item).then(_ => {
        //this.presentTost('Paciente atualizado com sucesso');
      //})
      this.pacienteProvider.atualizarFS(this.itemID, this.item).then(_ => {
        this.presentTost('Paciente atualizado com sucesso');
      })
    } 
    else { //inserir
      /*this.pacienteProvider.inserir(this.item).then(_ =>{
        this.presentTost('Paciente inserido com sucesso');
        this.navCtrl.pop();
      });*/

      this.pacienteProvider.inserirFS(this.item).then(_ => {
        this.presentTost('Paciente inserido com sucesso');
        this.navCtrl.pop();
      });
    ;}


  }
  excluir() {

    const confirm = this.alertCtrl.create({
      title: 'Excluir?',
      message: 'Tem certeza que deseja excluir este paciente?',
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
            /*this.pacienteProvider.remover(this.itemID)
              .then(_ => {
                console.log('Ok');
              })
              .catch(error => {
                console.log('Erro', error);
              })*/
              this.pacienteProvider.removerFS(this.itemID)
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


