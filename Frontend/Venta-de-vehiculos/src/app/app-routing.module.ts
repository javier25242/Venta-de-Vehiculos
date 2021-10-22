import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsadosComponent } from './pages/usados/usados.component';
import { NuevosComponent } from './pages/nuevos/nuevos.component';
import { GuiaComponent } from './pages/guia/guia.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'administrador',
    component: AdministradorComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'usados',
    component: UsadosComponent
  },
  {
    path: 'nuevos',
    component: NuevosComponent
  },
  {
    path: 'guia',
    component: GuiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
