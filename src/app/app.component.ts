import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Project';

  mostrarMenu: boolean = false;

   constructor( private authService: AuthService){

   }
   ngOnInit(){
     this.authService.mostrarMenuEmitter.subscribe(
       mostrar => this.mostrarMenu = mostrar
     );
   }
}
