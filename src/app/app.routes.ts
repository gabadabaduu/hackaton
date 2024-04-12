import { Routes } from '@angular/router';
import { InicioSesionComponent } from './Modules/Autenticacion/Paginas/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './Modules/Autenticacion/Paginas/registro/registro.component';
import { DashboardComponent } from './Modules/Autenticacion/Paginas/dashboard/dashboard.component';
import { MisSitiosComponent } from './Modules/Empresa/Paginas/mis-sitios/mis-sitios.component';
import { MisGananciasComponent } from './Modules/Empresa/Paginas/mis-ganancias/mis-ganancias.component';
import { DondeIrComponent } from './Modules/Usuario/Paginas/donde-ir/donde-ir.component';
import { ExperienciasComponent } from './Modules/Usuario/Paginas/experiencias/experiencias.component';
import { MisReservasComponent } from './Modules/Usuario/Paginas/mis-reservas/mis-reservas.component';

export const routes: Routes = [
    { path : 'inicio-sesion', component: InicioSesionComponent},
    { path : 'app-registro', component: RegistroComponent},
    { path : 'app-dashboard', component: DashboardComponent},
    { path : 'app-mis-sitios', component: MisSitiosComponent},
    { path : 'app-mis-ganancias', component: MisGananciasComponent},
    { path : 'app-donde-ir', component: DondeIrComponent},
    { path : 'app-experiencias', component: ExperienciasComponent},
    { path : 'app-mis-reservas', component: MisReservasComponent},
];