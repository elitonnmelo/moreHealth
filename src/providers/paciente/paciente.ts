import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangeDetectorStatus } from '@angular/core/src/change_detection/constants';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable()
export class PacienteProvider {

  ENTIDADE = '/pacientes'

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
  buscar(cidade: string) {
    return this.afd.list(this.ENTIDADE, ref => ref.orderByChild('cidade').equalTo(cidade))
      .snapshotChanges()
      .map(item => item.map(changes => ({key: changes.payload.key, value: changes.payload.val() })));
  }
  buscarFS(uf: string, cidade: string) {
    return this.afs.collection(this.ENTIDADE,
    ref => ref
      .where('cidade', '==', cidade)
      .where('uf', '==', uf)
      .orderBy('nome')
    )
    .snapshotChanges()
    .map(item => item.map( changes => ({key: changes.payload.doc.id, value: changes.payload.doc.data() })));
  }
  listarFS() {
    //return this.afs.collection(this.ENTIDADE).valueChanges();
    return this.afs.collection(this.ENTIDADE)
    .snapshotChanges()
    .map(item => item.map( changes => ({key: changes.payload.doc.id, value: changes.payload.doc.data() })));
  }

  inserir(item) {
    return this.afd.list(this.ENTIDADE).push(item);
    
  }
  inserirFS(item) {
    
    item.id = this.afs.createId();
    let item2 = JSON.parse(JSON.stringify(item))
    return this.afs.doc(this.ENTIDADE + '/' + item2.id).set(item2);
  }

  atualizar(id, item) {
    return this.afd.object(this.ENTIDADE + '/' + id).update(item);
  }
  atualizarFS(id, item) {
    return this.afs.doc(this.ENTIDADE + '/' + id).update(item);
  }

  remover(id) {
    return this.afd.object(this.ENTIDADE + '/' + id).remove();
  }
  removerFS(id) {
    return this.afs.doc(this.ENTIDADE + '/' + id).delete();
  }

}
