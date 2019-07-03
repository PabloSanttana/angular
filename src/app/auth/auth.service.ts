import { Injectable } from '@angular/core';

import { Usuario } from '../principal/login/usuario'
import { Router } from '@angular/router';
import { EventEmitter } from 'events';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if(usuario.nome === 'pablo' && usuario.senha === '12345'){

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['']);

    } else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
       

  }
}
