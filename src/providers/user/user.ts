import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import {Storage} from "@ionic/storage";

@Injectable()
export class UserProvider {

  constructor(public http: HttpClient,
      public afd: AngularFireDatabase,
      public afa: AngularFireAuth,
      public storage: Storage
    ) {
    console.log('Hello UserProvider Provider');
  }

  login(email, senha) {
    return this.afa.auth.signInWithEmailAndPassword(email, senha);
  }

  cadastro(usuario) {
    this.afa.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then(_usuarioAuth => {
        usuario.id = _usuarioAuth.uid;
        delete usuario.senha;

        this.salvarUsuario(usuario);
      }).catch(error => {
        console.log(error);
      })
      ;
  }

  recuperarSenha(email) {
    return this.afa.auth.sendPasswordResetEmail(email);
  }

  salvarUsuario(usuario) {
    this.afd.object('/usuarios/' + usuario.id).update(usuario);
  }

  listarUsuarios() {
    return this.afd.list('/usuarios').valueChanges();
  }

  listarEnderecos() {
    return this.afd.list('/endereco').valueChanges();
  }

  salvarCep(endereco) {
    // this.afd.object('/endereco').update(endereco);
    this.afd.list('/endereco').push(endereco);
  }
  byId(id: string) {
    return this.afd.object('/usuarios/' + id).valueChanges();
    
  }
  slavarLocal(id){
    return this.storage.set('usuario', id)
  }
  lerLocal(){
    return this.storage.get('usuario')
  }
  removerLocal(){
    return this.storage.remove('usuario')
  }
}
