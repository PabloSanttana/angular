

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './principal/login/login.component';
import { FilmesComponent } from './principal/filmes/filmes.component';
import { CadastrosComponent } from './principal/cadastros/cadastros.component';


const routes: Routes = [
  {path : 'login', component: LoginComponent,},
  { path : 'filmes', component: FilmesComponent},
  { path : 'cadastro', component: CadastrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
