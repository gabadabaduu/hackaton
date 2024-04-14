import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pasos-navegacion',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './pasos.html',
  styleUrl: './pasos.css'
})
export class PasosComponent {
  @Input() imagenUrl: string | undefined;
  @Input() numero: number | undefined;
  @Input() color: string | undefined;
  @Input() text: string | undefined;
  @Input() numeroColor: string| undefined;
  @Input() textoColor: string| undefined;
}
