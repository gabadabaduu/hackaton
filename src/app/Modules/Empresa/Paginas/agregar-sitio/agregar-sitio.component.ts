import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {BarraNavegacionComponent} from '../../Componentes/barra-navegacion/barra-navegacion.component';

@Component({
  selector: 'app-agregar-sitio',
  standalone: true,
  imports: [CommonModule, BarraNavegacionComponent],
  templateUrl: './agregar-sitio.component.html',
  styleUrls: ['./css/agregar-sitio.component.css','./css/agregar-sitio2.component.css', './css/agregar-sitio3.component.css', './css/agregar-sitio4.component.css']
})
export class AgregarSitioComponent {
  cantidad: number = 32000; 

  sumarCantidad() {
    this.cantidad = this.cantidad + 1000;
  }

  restarCantidad() {
    if (this.cantidad > 0) {
      this.cantidad = this.cantidad - 1000;
    }
  }

  formatNumber(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}