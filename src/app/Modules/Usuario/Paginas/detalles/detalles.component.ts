import { Component,OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = +this.route.snapshot.queryParams['id'];
    if (this.id === 1) {
      this.nombre = "Museo del Oro - Bogotá";
      this.estrellas = "4.84";
      this.img1 = '/assets/Detalles/Img11.jpg';
      this.img2 = '/assets/Detalles/Img2.jpg';
      this.img3 = '/assets/Detalles/Img1.jpg';
      this.img4 = '/assets/Detalles/Img3.jpg';
      this.precio = "40,000 COP";
      this.fecha = "21/07/2023";
    }else if (this.id === 2) {
      this.nombre = "Catarata La Fortuna - Costa Rica";
      this.estrellas = "5";
      this.img1 = '/assets/Detalles/Img23.jpg';
      this.img2 = '/assets/Detalles/Img21.jpg';
      this.img3 = '/assets/Detalles/Img22.jpg';
      this.img4 = '/assets/Detalles/Img24.jpg';
      this.precio = "80,000 COP";
      this.fecha = "21/07/2023";
    }else if (this.id === 3) {
      this.nombre = "Museo Nacional- Bogotá";
      this.estrellas = "5";
      this.img1 = '/assets/Detalles/Image1.png';
      this.img2 = '/assets/Detalles/Image2.png';
      this.img3 = '/assets/Detalles/Image3.png';
      this.img4 = '/assets/Detalles/Image4.png';
      this.precio = "8,000 COP";
      this.fecha = "21/07/2023";
    }else if (this.id === 4) {
      this.nombre = "Volcan Arenal - Costa Rica";
      this.estrellas = "5";
      this.img1 = '/assets/Detalles/Img31.jpg';
      this.img2 = '/assets/Detalles/Img32.jpg';
      this.img3 = '/assets/Detalles/Img33.webp';
      this.img4 = '/assets/Detalles/Img34.jpg';
      this.precio = "64,000 COP";
      this.fecha = "21/07/2023";
    }
  }
  verDetalles(id: number) {
    this.router.navigate(['/app-checkout'], { queryParams: { id: id } });
  }
   
}