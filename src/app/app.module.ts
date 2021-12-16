import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// pages
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RolesComponent } from './pages/roles/roles.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { InicioComponent } from './pages/inicio/inicio.component';

// components
import { NavbarComponent } from './components/navbar/navbar.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { CardComponent } from './components/card/card.component';
import { UsuarioFormDialogComponent } from './components/usuario-form-dialog/usuario-form-dialog.component';
import { SmallFormDialogComponent } from './components/small-form-dialog/small-form-dialog.component';
import { NotifierComponent } from './components/notifier/notifier.component';
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
    UsuarioFormDialogComponent,
    SmallFormDialogComponent,
    NotifierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
