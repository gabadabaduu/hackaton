import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-sitio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agregar-sitio.component.html',
  styleUrl: './agregar-sitio.component.css'
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