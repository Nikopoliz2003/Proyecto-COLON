import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './Paginas/principal/principal.component';
import { BotonPrincipalComponent } from './componentes/boton-principal/boton-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    BotonPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
