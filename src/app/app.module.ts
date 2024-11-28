import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { MenuPersonajesComponent } from './menu-personajes/menu-personajes.component';
import {DragonBServiceService} from './dragon-bservice.service';
import { MenuTranformacionesComponent } from './menu-tranformaciones/menu-tranformaciones.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditTransformacionComponent } from './edit-transformacion/edit-transformacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    MenuPersonajesComponent,
    MenuTranformacionesComponent,
    EditTransformacionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DragonBServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
