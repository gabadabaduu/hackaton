import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-sitios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-sitios.component.html',
  styleUrl: './mis-sitios.component.css'
})
export class MisSitiosComponent {
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
