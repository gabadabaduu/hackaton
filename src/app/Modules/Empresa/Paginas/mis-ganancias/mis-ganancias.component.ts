import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {BarraNavegacionComponent} from '../../Componentes/barra-navegacion/barra-navegacion.component';

@Component({
  selector: 'app-mis-ganancias',
  standalone: true,
  imports: [CommonModule, BarraNavegacionComponent],
  templateUrl: './mis-ganancias.component.html',
  styleUrl: './mis-ganancias.component.css'
})
export class MisGananciasComponent {
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
