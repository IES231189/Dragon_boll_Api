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
<<<<<<< HEAD
import { ModalComponent } from './modal/modal.component';
import { EditarKiComponent } from './editar-ki/editar-ki.component';
=======
import { EditTransformacionComponent } from './edit-transformacion/edit-transformacion.component';
>>>>>>> 2c114b9d5bfadd0c0248a5a6b123979932a201b8

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    MenuPersonajesComponent,
    MenuTranformacionesComponent,
<<<<<<< HEAD
    ModalComponent,
    EditarKiComponent,


=======
    EditTransformacionComponent,
>>>>>>> 2c114b9d5bfadd0c0248a5a6b123979932a201b8

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
