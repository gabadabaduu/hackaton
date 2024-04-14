import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  email: string = '';
  password: string = '';
  recordarUsuario: boolean = false;

  iniciarSesion() {
    const emailInput = (document.querySelector('.input1') as HTMLInputElement).value;
    const passwordInput = (document.querySelector('.input2') as HTMLInputElement).value;
    const recordarCheckbox = (document.getElementById('remember') as HTMLInputElement).checked;
  }
}
