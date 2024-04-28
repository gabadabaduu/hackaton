import { Component } from '@angular/core';
import { PasosComponent } from '../../Componentes/pasos/pasos';
import {BarraNavegacionComponent} from '../../Componentes/barra-navegacion/barra-navegacion.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PasosComponent, BarraNavegacionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
