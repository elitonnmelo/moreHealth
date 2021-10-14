import { Component, ViewChild } from '@angular/core';
import { ActionSheetController, IonicPage, LoadingController, NavController, NavParams, Platform } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user';
import { FirebaseStorageProvider } from '../../providers/firebase-storage/firebase-storage';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {
  @ViewChild('fileUserPhoto') fileUserPhoto;
  
  item = new User();
  foto = '../../assets/imgs/user.png'
  isUploaded = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider,
    public firebaseStorageProvider: FirebaseStorageProvider,
    public loadingCtrl: LoadingController ,
    private camera: Camera,
    public platform: Platform,
    public actionSheetCtrl: ActionSheetController
    ) {
  }

  ionViewDidLoad() {

    //const loader = this.loadingCtrl.create({
    //  content: "Aguarde..."
   // });
    //loader.present();
    console.log('ionViewDidLoad ConfiguracoesPage');

    this.userProvider.lerLocal().then(_userId => {
      console.log('teste 0', _userId);
      this.userProvider.byId(_userId).subscribe(_user => {
        console.log('teste 3', _user);
        this.item = new User();
        this.item.id = _userId;
        this.item.nome = _user['nome'];
        this.item.email = _user['email'];
        console.log('teste 1');
        const path = '/user/' + this.item.id + '/foto.jpg';
        this.firebaseStorageProvider.downloadImageStorage(path).then(_data => {
          this.foto = _data;
          console.log('teste 2');

          //loader.dismiss();
        }).catch(error => {
          console.log('erro',error);
        })
      })
    })
    
  }
  salvar() {
    if(this.isUploaded){
      this.firebaseStorageProvider.uploadImageStorage(this.foto, '/user/' + this.item.id + '/foto.jpg');
    }
    
  }
  escolherFoto() {
    const isMobile = this.platform.is('cordova');
    console.log('mobile', isMobile);
    
    if(isMobile) {
      this.abrirCelular();
    } else {
      this.abrirArquivos();
    }
  }
  abrirArquivos() {
    this.fileUserPhoto.nativeElement.click();
  }

  abrirCelular() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Selecione',
      buttons: [
        {
          text: 'Câmera',
          role: 'destructive',
          handler: () => {
           // this.abrirCamera();
          }
        },{
          text: 'Galeria',
          handler: () => {
            //this.abrirGaleria();
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
    
  private abrirCamera() {
    const options: CameraOptions = {
      quality: 50,
      // destinationType: this.camera.DestinationType.FILE_URI,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      allowEdit: false,
      targetHeight: 350,
      targetWidth: 350,
      
      // CAMERA
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: true,
      cameraDirection: this.camera.Direction.FRONT,
      correctOrientation: true,
    }

    this.carregarImagem(options);
  }

  private abrirGaleria() {
    const options: CameraOptions = {
      quality: 50,
      // destinationType: this.camera.DestinationType.FILE_URI,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      allowEdit: false,
      targetHeight: 350,
      targetWidth: 350,
      
      // GALERIA
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true,
    }

    this.carregarImagem(options);
  }

  private carregarImagem(options) {
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log('base64', base64Image)

      this.foto = base64Image;
      this.isUploaded = true;

     }, (err) => {
      // Handle error
     });
  }
  processWebImage($event){
    this.firebaseStorageProvider.processWebImage($event, (imageBase64, w, h) => {
      this.foto = imageBase64;
      this.isUploaded = true;
    });
  }

}
