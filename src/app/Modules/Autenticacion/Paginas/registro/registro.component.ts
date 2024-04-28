import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BarraNavegacionComponent} from '../../Componentes/barra-navegacion/barra-navegacion.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, BarraNavegacionComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {

  displayContainer1 = 'flex';
  displayContainer2 = 'none';

  toggleContainers() {
    if (this.displayContainer1 === 'flex') {
      this.displayContainer1 = 'none';
      this.displayContainer2 = 'flex';
    } else {
      this.displayContainer1 = 'flex';
      this.displayContainer2 = 'none';
    }
  }
  Registrarse() {
    const nombreCompletoInput = (document.getElementById('inputNombreCompleto') as HTMLInputElement).value;
    const emailInput = (document.getElementById('inputEmail') as HTMLInputElement).value;
    const passwordInput = (document.getElementById('inputPassword') as HTMLInputElement).value;
  }

   Registrarse2() {
    const nombreCompletoRepInput = (document.getElementById('inputNombreCompletoRep') as HTMLInputElement).value;
    const nitInput = (document.getElementById('inputNIT') as HTMLInputElement).value;
    const actividadPrimariaInput = (document.getElementById('inputActividadPrimaria') as HTMLInputElement).value;
    const nombreEmpresaInput = (document.getElementById('inputNombreEmpresa') as HTMLInputElement).value;
    const emailRepInput = (document.getElementById('inputEmailRep') as HTMLInputElement).value;
    const passwordRepInput = (document.getElementById('inputPasswordRep') as HTMLInputElement).value;

  }
}
