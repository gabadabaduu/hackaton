import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';
@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {
  selectedTab : String = 'dondeIr';
  constructor(private router: Router) { }
  // Logica de la barra de navegacion para enrutar//
    selectTab(tab: String) : void{
    this.selectedTab = tab;

    if(tab== 'dondeIr'){
      this.router.navigate(['/app-donde-ir']);
    }
    if(tab== 'experiencias'){
      this.router.navigate(['/app-experiencias']);
    }
    if(tab== 'misReservas'){
      this.router.navigate(['/app-mis-reservas']);
    }

  }
}
