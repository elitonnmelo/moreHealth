import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';

import { Storage } from "@ionic/storage";
import { UserProvider } from '../providers/user/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public storage: Storage,
    public userProvider: UserProvider
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: HomePage, icon: 'home' },
      //{ title: 'List', component: ListPage },
      { title: 'CONFIGURAÇÕES', component: 'ConfiguracoesPage', icon: 'settings'},
      { title: 'PACIENTES', component: 'PacienteListPage', icon: 'pulse'},
      { title: 'CLINICAS', component: 'ClinicaListPage', icon: 'people' },
      { title: 'MEDICOS', component: 'MedicoListPage', icon: 'md-medkit' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
  
      this.statusBar.styleDefault();
      this.splashScreen.hide();
//novo daqui 
      this.userProvider.lerLocal().then(_usuario => {
        console.log('AP COMPONENT', _usuario);

        if(_usuario && _usuario.length > 0) {
        // if(_usuario && _usuario.email > 0) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = 'LoginPage';
        }

      })
      //ate aqui
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  logout() {
    this.userProvider.removerLocal().then(_data => {
      this.nav.setRoot('LoginPage');
    });
  }
}
