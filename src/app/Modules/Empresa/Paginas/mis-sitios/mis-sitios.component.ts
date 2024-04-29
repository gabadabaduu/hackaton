import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {BarraNavegacionComponent} from '../../Componentes/barra-navegacion/barra-navegacion.component';

@Component({
  selector: 'app-mis-sitios',
  standalone: true,
  imports: [CommonModule, BarraNavegacionComponent],
  templateUrl: './mis-sitios.component.html',
  styleUrls: ['./css/mis-sitios.component.css','./css/mis-sitios2.component.css', './css/mis-sitios3.component.css', './css/mis-sitios4.component.css']
})
export class MisSitiosComponent {
  constructor(private router: Router) {}
  verDetalles() {
    this.router.navigate(['/app-agregar-sitio']);
  }
  disponibleStyle = {
    backgroundColor: 'white'
  };

  desactivarStyle = {
    backgroundColor: '#00EE4F'
  };

  toggleButtons(current: string) {
    if (current === 'disponible') {
      this.disponibleStyle.backgroundColor = 'white';
      this.desactivarStyle.backgroundColor = '#00EE4F';
    } else {
      this.disponibleStyle.backgroundColor = '#00EE4F';
      this.desactivarStyle.backgroundColor = 'white';
    }
  }
}
