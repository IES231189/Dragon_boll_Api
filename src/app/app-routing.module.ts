import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuTranformacionesComponent} from './menu-tranformaciones/menu-tranformaciones.component';
import {MenuPersonajesComponent} from './menu-personajes/menu-personajes.component';
import {EditarKiComponent} from "./editar-ki/editar-ki.component";

const routes: Routes = [
  {path: '', component: MenuPersonajesComponent},
  {path: 'transformaciones/:id', component: MenuTranformacionesComponent},
  {path: 'personajes', component: MenuPersonajesComponent},
  { path: 'editarki/:id', component: EditarKiComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
