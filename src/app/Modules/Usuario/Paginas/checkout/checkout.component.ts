import { Component,OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
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
      this.detalles1 = "Entrada-Tiquete Museo Nacional"
      this.detalles2 = "impuestos"
      this.detallesprecio1 = "$33.613"
      this.detallesprecio2 = "$6.387"

    }else if (this.id === 2) {
      this.nombre = "Catarata La Fortuna - Costa Rica";
    }else if (this.id === 3) {
      this.nombre = "Museo Nacional- Bogotá";
    }else if (this.id === 4) {
      this.nombre = "Volcan Arenal - Costa Rica";
    }
  }
  
}