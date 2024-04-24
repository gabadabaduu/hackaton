import { Component,OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit {
  id: number | undefined;
  nombre: string = "";
  estrellas: string = "";
  img1: string = "";
  img2: string = "";
  img3: string = "";
  img4: string = "";
  precio: string = "";
  fecha: string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.queryParams['id'];
    if (this.id === 1) {
      this.nombre = "Museo del Oro - Bogotá";
      this.estrellas = "4.84";
      this.img1 = '/assets/Detalles/Image1.png';
      this.img2 = '/assets/Detalles/Image2.png';
      this.img3 = '/assets/Detalles/Image3.png';
      this.img4 = '/assets/Detalles/Image4.png';
      this.precio = "40,000 COP";
      this.fecha = "21/07/2023";

    }else if (this.id === 2) {
      this.nombre = "Catarata La Fortuna - Costa Rica";
      this.estrellas = "5";
    }else if (this.id === 3) {
      this.nombre = "Museo Nacional- Bogotá";
      this.estrellas = "5";
    }else if (this.id === 4) {
      this.nombre = "Volcan Arenal - Costa Rica";
      this.estrellas = "5";
    }
  }
}