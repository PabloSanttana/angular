

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './principal/login/login.component';
import { CadastrosComponent } from './principal/cadastros/cadastros.component';
import { CasosclinicosComponent } from './principal/Casos/casosclinicos/casosclinicos.component';
import { PrincipalComponent } from './principal/principal.component';



const routes: Routes = [
  {path : '', component: PrincipalComponent},
  {path : 'login', component: LoginComponent},
  { path : 'cadastro', component: CadastrosComponent},
  { path : 'casos', component: CasosclinicosComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
