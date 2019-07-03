import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { LoginComponent } from './login/login.component';
import { FilmesComponent } from './filmes/filmes.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [PrincipalComponent, LoginComponent, FilmesComponent, CadastrosComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ], 
  exports: [
    PrincipalComponent, CadastrosComponent
  ]
})
export class PrincipalModule { }
