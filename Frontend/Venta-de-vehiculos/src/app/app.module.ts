import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsadosComponent } from './pages/usados/usados.component';
import { NuevosComponent } from './pages/nuevos/nuevos.component';
import { GuiaComponent } from './pages/guia/guia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdministradorComponent,
    NotFoundComponent,
    RegisterComponent,
    UsadosComponent,
    NuevosComponent,
    GuiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
