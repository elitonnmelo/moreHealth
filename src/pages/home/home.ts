import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { options } from 'sw-toolbox';
import { ClinicaProvider } from '../../providers/clinica/clinica';
import { ExportProvider } from '../../providers/export/export';
import { UserProvider } from '../../providers/user/user';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef; // endereço da minha div no html
  map; //objeto mapa do google
  clinicasArr = [];
  makerMe: any;

  constructor(
    public navCtrl: NavController,
    public userProvider: UserProvider,
    public clinicaProvider: ClinicaProvider,
    public exportProvider: ExportProvider,
    private geolocation: Geolocation
    ) {
    
  
  }
  ionViewDidLoad(){
    this.map = this.createMap(this.mapElement);
    /*let arrMarkers = [
      {lat: -4.977860440672664,  lng: -39.05786898947217, nome: 'Quixada', abrev: 'Q'},
      {lat: -3.74405702514873, lng: -38.536073960684206, nome: 'Fortaleza', abrev: 'F'}
      
    ];
    this.carregaDadosMapa(arrMarkers);*/
    this.clinicaProvider.listarFS().subscribe(_data => {
      this.clinicasArr = _data;
      for (let i = 0; i < _data.length; i++) {
        const element = _data[i];

        let _lat = element.value.lat;
        let _lng = element.value.lng;
        let _cidade = element.value.cidade;

        let itemMarker = {
          lat: _lat,
          lng: _lng,
          local: _cidade,
          abrev: _cidade[0],
        }
        this.carregaDadosMapa(itemMarker);
        
      }
    })

    this.atualizarLocalizacao();
  
  }
  addMarkerMe(_lat, _lng, nome) {
    return new google.maps.Marker({
      position: {lat: _lat, lng: _lng},
      title: nome,
      icon: new google.maps.MarkerImage(
        'https://mt.google.com/vt/icon?psize=16&font=fonts/Roboto-Regular.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-a.png&ax=44&ay=48&scale=1&text='
      )
    })
  }
  atualizarLocalizacao() {

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude

      console.log('GPS**');
      console.log('lat: ', resp.coords.latitude);
      console.log('lng: ', resp.coords.longitude);

      if(this.makerMe) {
        this.makerMe.setMap(null); // remove o marcador do mapa
        this.makerMe = undefined;
      }
      
      this.makerMe = this.addMarkerMe(resp.coords.latitude, resp.coords.longitude, 'me');
      this.makerMe.setMap(this.map);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }



  carregaDadosMapa(itemMarker){
  
    //criando marcador (pino)
    const marker = this.addMarker(itemMarker.lat,  itemMarker.lng, itemMarker.local, itemMarker.abrev);
    const addInfowindow = this.addInfoWindow(itemMarker.local); // cria o infoWindow
    marker.setMap(this.map); // adiciona um marcaador no mapa

    marker.addListener("click", () => { //evento de marcador do pino
      addInfowindow.open({ //abre o infoWindow
        anchor: marker,
        map: this.map,
      })
    })

    //let marker = this.addMarker(-20.790898,  -51.667554);
    //marker.setMap(this.map);
  }
  createMap(mapElement) {
    if(mapElement !== null && mapElement.nativeElement !== null && google) {
      let options = {
        zoom: 7,
        center: {lat: -3.619550531330379, lng: -38.48479387210596 }
      };
      return new google.maps.Map(mapElement.nativeElement, options);
    }
    return undefined;
  }
  addMarker(_lat, _lng, local, abrev) {
    return new google.maps.Marker({
      position: {lat: _lat, lng: _lng},
      title: local,
      icon: new google.maps.MarkerImage(
        'https://mt.google.com/vt/icon?psize=16&font=fonts/Roboto-Regular.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-a.png&ax=44&ay=48&scale=1&text=' + abrev
      )
    })
  }

  addInfoWindow(texto: string) {
    let contentHtml = ` 
      Estamos em: ${texto}
    `;
    return  new google.maps.InfoWindow({
      content: contentHtml
    })
  }
  gerarCSV() {
    console.log(this.exportarDados());
    this.exportProvider.gerarCSV(this.exportarDados(), 'clinicas');

  }
  gerarExcel() {
    this.exportProvider.gerarExcel(this.exportarDados(), 'clinicas');
  }
  gerarPDF() {
    this.exportProvider.gerarPDF(this.exportarDados(), 'clinicas');

  }

  private exportarDados() {
    let jsonArr = [];

    for (let i = 0; i < this.clinicasArr.length; i++) {
      const element = this.clinicasArr[i];
      
      const key = element.key;
      const value = element.value;

      let _item = {
        'latitude': value.lat,
        'longitude': value.lng,
        //'cidade': value.cidade,
        //'link': 'https://www.google.com/maps/?q=' + value.lat + ',' + value.lng,
      };

      jsonArr.push(_item);
    }

    return jsonArr;
  }
}
