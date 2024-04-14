import { Component } from '@angular/core';
import { PasosComponent } from '../../Componentes/pasos/pasos';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PasosComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
