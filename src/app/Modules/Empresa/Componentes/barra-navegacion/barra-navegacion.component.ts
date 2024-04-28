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
  selectedTab : String = 'misTuristicos';
  constructor(private router: Router) { }
  // Logica de la barra de navegacion para enrutar//
    selectTab(tab: String) : void{
    this.selectedTab = tab;
    if(tab== 'misTuristicos'){
      this.router.navigate(['/app-mis-sitios']);
    }
    if(tab== 'misGanancias'){
      this.router.navigate(['/app-mis-ganancias']);
    }
    if(tab=='photoUser')
      this.router.navigate(['/app-dashboard']);

  }
  
}
