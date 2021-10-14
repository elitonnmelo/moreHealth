import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';

import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email = '';
  senha = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public userProvider: UserProvider,
    public storage: Storage
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  entrar() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
    });
    loader.present();

    this.userProvider.login(this.email, this.senha)
      .then(user => {
        loader.dismiss();
        console.log('user', user);

        this.userProvider.slavarLocal(user.uid)
          .then(_data => {
            this.navCtrl.setRoot(HomePage);
          });
      })
      .catch(error => {
        loader.dismiss();
        console.log('error', error);
        this.showAlertErro();
      })
  }

  cadastro() {
    this.navCtrl.push('CadastroPage');
  }

  esqueciSenha() {
    this.navCtrl.push('RecuperarSenhaPage');
  }

  showAlertErro() {
    const alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'Não foi possível realizar o login',
      buttons: ['OK']
    });
    alert.present();
  }

}
