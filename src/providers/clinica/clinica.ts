import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the ClinicaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClinicaProvider {

  ENTIDADE = '/clinica';

  constructor(
    public http: HttpClient,
    public afd: AngularFireDatabase,
    public afs: AngularFirestore
    ) {
    console.log('Hello PacienteProvider Provider');
  }
  listar() {
    return this.afd.list(this.ENTIDADE)
      .snapshotChanges()
      .map(item => item.map(changes => ({key: changes.payload.key, value: changes.payload.val() })));
  }

  inserir(item) {
    return this.afd.list(this.ENTIDADE).push(item);
    
  }

  atualizar(id, item) {
    return this.afd.object(this.ENTIDADE+'/' + id).update(item);
  }

  remover(id) {
    return this.afd.object(this.ENTIDADE+'/' + id).remove();
  }
  listarFS() {
    //return this.afs.collection(this.ENTIDADE).valueChanges();
    return this.afs.collection(this.ENTIDADE)
    .snapshotChanges()
    .map(item => item.map( changes => ({key: changes.payload.doc.id, value: changes.payload.doc.data() })));
  }
  inserirFS(item) {
    
    item.id = this.afs.createId();
    let item2 = JSON.parse(JSON.stringify(item))
    return this.afs.doc(this.ENTIDADE + '/' + item2.id).set(item2);
  }
  atualizarFS(id, item) {
    return this.afs.doc(this.ENTIDADE + '/' + id).update(item);
  }
  removerFS(id) {
    return this.afs.doc(this.ENTIDADE + '/' + id).delete();
  }


}

