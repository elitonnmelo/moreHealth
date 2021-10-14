import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PacienteProvider } from '../providers/paciente/paciente';
import { ClinicaProvider } from '../providers/clinica/clinica';
import { MedicoProvider } from '../providers/medico/medico';
import { UserProvider } from '../providers/user/user';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { IonicStorageModule } from '@ionic/storage';
import { FirebaseStorageProvider } from '../providers/firebase-storage/firebase-storage';
import { Geolocation } from '@ionic-native/geolocation';
//import { env } from '../env/env';

import { AngularFireStorageModule } from "angularfire2/storage";
import { ExportProvider } from '../providers/export/export';
import { Camera } from '@ionic-native/camera';


const firebaseConfig = {
  apiKey: "AIzaSyC6U6O6EWr-Gzk75AsYOsExLmXB5owercg",
  authDomain: "app-clinica-b7177.firebaseapp.com",
  databaseURL: "https://app-clinica-b7177-default-rtdb.firebaseio.com",
  projectId: "app-clinica-b7177",
  storageBucket: "app-clinica-b7177.appspot.com",
  messagingSenderId: "229054588292",
  appId: "1:229054588292:web:e5c7ce23b1d1d641eae9d1",
  measurementId: "G-GHMH9398DE"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PacienteProvider,
    ClinicaProvider,
    MedicoProvider,
    UserProvider,
    FirebaseStorageProvider,
    ExportProvider,
    Geolocation,
    Camera
    
  
  ]
})
export class AppModule {}
