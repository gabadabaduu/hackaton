import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {
    // Logica de la barra de navegacion para enrutar//
    selectedTab : String = 'logo';
    constructor(private router: Router) { }

    selectTab(tab: String) : void{
      this.selectedTab
      if(tab== 'iniciarSesion'){
        this.router.navigate(['/inicio-sesion']);
      }
      if(tab== 'registrarse'){
        this.router.navigate(['/app-registro']);
      }
      if(tab== 'logo'){
        this.router.navigate(['/app-dashboard']);
      }    
      
    }
}
