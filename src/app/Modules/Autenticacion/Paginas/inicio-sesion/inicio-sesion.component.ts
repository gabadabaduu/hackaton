import { Component } from '@angular/core';
import {BarraNavegacionComponent} from '../../Componentes/barra-navegacion/barra-navegacion.component';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [BarraNavegacionComponent],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  email: string = '';
  password: string = '';
  recordarUsuario: boolean = false;

  iniciarSesion() {
    const emailInput = (document.getElementById('inputEmail') as HTMLInputElement).value;
    const passwordInput = (document.getElementById('inputPassword') as HTMLInputElement).value;
    const recordarCheckbox = (document.getElementById('remember') as HTMLInputElement).checked;
    
    this.email = emailInput;
    this.password = passwordInput;
    this.recordarUsuario = recordarCheckbox;
  }
  

}
