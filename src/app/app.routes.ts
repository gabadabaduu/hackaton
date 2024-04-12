import { Routes } from '@angular/router';
import { BarraNavegacionComponent } from './Modules/Autenticacion/Componentes/barra-navegacion/barra-navegacion.component';
import { ExperienciasComponent } from './Modules/Usuario/Paginas/experiencias/experiencias.component';
import { InicioSesionComponent } from './Modules/Autenticacion/Paginas/inicio-sesion/inicio-sesion.component';
import { MisReservasComponent } from './Modules/Usuario/Paginas/mis-reservas/mis-reservas.component';
import { MisGananciasComponent } from './Modules/Empresa/Paginas/mis-ganancias/mis-ganancias.component';
import { MisSitiosComponent } from './Modules/Empresa/Paginas/mis-sitios/mis-sitios.component';
import { RegistroComponent } from './Modules/Autenticacion/Paginas/registro/registro.component';
import { DondeIrComponent } from './Modules/Usuario/Paginas/donde-ir/donde-ir.component';

export const routes: Routes = [
  { path: 'barra-navegacion', component: BarraNavegacionComponent },
  { path: 'experiencias', component: ExperienciasComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'mis-reservas', component: MisReservasComponent },
  { path: 'mis-ganancias', component: MisGananciasComponent },
  { path: 'mis-sitios', component: MisSitiosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'donde-ir', component: DondeIrComponent },
];
