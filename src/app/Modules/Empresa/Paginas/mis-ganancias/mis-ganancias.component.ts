import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-ganancias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-ganancias.component.html',
  styleUrl: './mis-ganancias.component.css'
})
export class MisGananciasComponent {
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
