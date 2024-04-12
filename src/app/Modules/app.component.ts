import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraNavegacionComponent } from './Autenticacion/Componentes/barra-navegacion/barra-navegacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BarraNavegacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hackathon-Grupo-12+1';
}
