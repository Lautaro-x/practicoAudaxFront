import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';

//DEFINICION DE RUTAS
const appRoutes: Routes = [
    {
        path: '',
        component: ContactosComponent
    },
    {
        path: 'inicio',
        component: ContactosComponent
    },
    {
        path: 'contactos',
        component: ContactosComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout/:sure',
        component: LoginComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);