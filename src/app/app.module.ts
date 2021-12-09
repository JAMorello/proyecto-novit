import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

// pages
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RolesComponent } from './pages/roles/roles.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { InicioComponent } from './pages/inicio/inicio.component';

// components
import { NavbarComponent } from './components/navbar/navbar.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { CardComponent } from './components/card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    RolesComponent,
    RecursosComponent,
    InicioComponent,
    NavbarComponent,
    SectionHeaderComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
