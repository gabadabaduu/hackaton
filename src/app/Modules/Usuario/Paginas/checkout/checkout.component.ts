import { Component,OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BarraNavegacionComponent} from '../../Componentes/barra-navegacion/barra-navegacion.component';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [BarraNavegacionComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  id: number | undefined;
  nombre: string = "";
  detalles1: string = "";
  detalles2: string = "";
  detallesprecio1: string = "";
  detallesprecio2: string = "";
  img1: string = "";
  precio: string = "";
  fecha: string = "";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = +this.route.snapshot.queryParams['id'];
    if (this.id === 1) {
      this.nombre = "Museo del Oro - Bogotá";
      this.img1 = '/assets/checkout/Image1.png';
      this.precio = "40,000 COP";
      this.fecha = "21/07/2023";
      this.detalles1 = "Entrada-Tiquete Museo del Oro"
      this.detalles2 = "impuestos"
      this.detallesprecio1 = "$33.613"
      this.detallesprecio2 = "$6.387"

    }else if (this.id === 2) {
      this.nombre = "Catarata La Fortuna - Costa Rica";
      this.img1 = '/assets/checkout/Image1.png';
      this.precio = "80,000 COP";
      this.fecha = "21/07/2023";
      this.detalles1 = "Entrada-Tiquete Catarata la Fortuna"
      this.detalles2 = "impuestos"
      this.detallesprecio1 = "$73.613"
      this.detallesprecio2 = "$6.387"
    }else if (this.id === 3) {
      this.nombre = "Museo Nacional- Bogotá";
      this.img1 = '/assets/checkout/Image1.png';
      this.precio = "8,000 COP";
      this.fecha = "21/07/2023";
      this.detalles1 = "Entrada-Tiquete Museo Nacional"
      this.detalles2 = "impuestos"
      this.detallesprecio1 = "$6.000"
      this.detallesprecio2 = "$2.000"
    }else if (this.id === 4) {
      this.nombre = "Volcan Arenal - Costa Rica";
      this.img1 = '/assets/checkout/Image1.png';
      this.precio = "60,000 COP";
      this.fecha = "21/07/2023";
      this.detalles1 = "Entrada-Tiquete Volcan Arenal"
      this.detalles2 = "impuestos"
      this.detallesprecio1 = "$60.000"
      this.detallesprecio2 = "$4.000"
    }
  }
  irExperiencias() {
    this.router.navigate(['/app-experiencias']);
  }
  
}