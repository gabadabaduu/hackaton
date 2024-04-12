import { Routes } from '@angular/router';
import { InicioSesionComponent } from './Modules/Autenticacion/Paginas/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './Modules/Autenticacion/Paginas/registro/registro.component';
import { DashboardComponent } from './Modules/Autenticacion/Paginas/dashboard/dashboard.component';

export const routes: Routes = [
    { path : 'inicio-sesion', component: InicioSesionComponent},
    { path : 'app-registro', component: RegistroComponent},
    { path : 'app-dashboard', component: DashboardComponent},
];
