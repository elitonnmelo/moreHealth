import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the MedicoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MedicoProvider {

  ENTIDADE = '/medicos';

  constructor(
    public http: HttpClient,
    public afd: AngularFireDatabase
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

}