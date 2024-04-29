import { Component , OnInit} from '@angular/core';
import {BarraNavegacionComponent} from '../../Componentes/barra-navegacion/barra-navegacion.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Notification {
  mensaje1: string;
  mensaje2: string;
  mensaje3: string;
}
@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [BarraNavegacionComponent,CommonModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./css/inicio-sesion.component.css','./css/inicio-sesion2.component.css', './css/inicio-sesion3.component.css']
})
export class InicioSesionComponent implements OnInit{

  constructor(private router: Router) {}
  email: string = '';
  password: string = '';
  recordarUsuario: boolean = false;
  notifications: Notification[] = [
    {
      mensaje1: "Para iniciar sesión como Usuario",
      mensaje2: "tico@gmail.com",
      mensaje3: "No hay necesidad de contraseña"
    },
    {
      mensaje1: "Para iniciar sesión como Empresa",
      mensaje2: "ticoempresa@gmail.com",
      mensaje3: "No hay necesidad de contraseña"
    }
  ];
  currentIndex: number = 0;
  isVisible: boolean = false;
  
  ngOnInit() {
    this.mostrarNotificaciones();
  }

  iniciarSesion() {
    const emailInput = (document.getElementById('inputEmail') as HTMLInputElement).value;
    const passwordInput = (document.getElementById('inputPassword') as HTMLInputElement).value;
    const recordarCheckbox = (document.getElementById('remember') as HTMLInputElement).checked;
    
    if (emailInput === 'tico@gmail.com'){
      this.router.navigate(['/app-donde-ir']);
    }
    else if (emailInput === 'ticoempresa@gmail.com'){
      this.router.navigate(['/app-mis-sitios']);
    }
   
  }

  mostrarNotificaciones() {
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
  
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.notifications.length;
        
        setTimeout(() => {
          this.mostrarNotificaciones();
        }, 500);
      }, 1000); 
    }, 10000);
  }

}
