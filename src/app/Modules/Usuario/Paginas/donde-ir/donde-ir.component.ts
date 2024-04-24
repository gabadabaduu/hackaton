import { Component } from '@angular/core';
import { CardComponent } from '../../Componentes/card/card.component';
import { DetallesComponent } from '../detalles/detalles.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-donde-ir',
  standalone: true,
  imports: [CardComponent,DetallesComponent],
  templateUrl: './donde-ir.component.html',
  styleUrl: './donde-ir.component.css'
})
export class DondeIrComponent {
  constructor(private router: Router) {}
  verDetalles(id: number) {
    this.router.navigate(['/app-detalles'], { queryParams: { id: id } });
  } 
}
