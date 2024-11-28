import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuTranformacionesComponent} from './menu-tranformaciones/menu-tranformaciones.component';
import {MenuPersonajesComponent} from './menu-personajes/menu-personajes.component';
import { EditTransformacionComponent } from './edit-transformacion/edit-transformacion.component';


const routes: Routes = [
  {path: '', component: MenuPersonajesComponent},
  {path: 'transformaciones/:id', component: MenuTranformacionesComponent},
  {path: 'transformaciones/:id/editar/:transformacionId', component: EditTransformacionComponent },
  {path: 'personajes', component: MenuPersonajesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
