import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuTranformacionesComponent} from './menu-tranformaciones/menu-tranformaciones.component';
import {MenuPersonajesComponent} from './menu-personajes/menu-personajes.component';
<<<<<<< HEAD
import {EditarKiComponent} from "./editar-ki/editar-ki.component";
=======
import { EditTransformacionComponent } from './edit-transformacion/edit-transformacion.component';

>>>>>>> 2c114b9d5bfadd0c0248a5a6b123979932a201b8

const routes: Routes = [
  {path: '', component: MenuPersonajesComponent},
  {path: 'transformaciones/:id', component: MenuTranformacionesComponent},
<<<<<<< HEAD
  {path: 'personajes', component: MenuPersonajesComponent},
  { path: 'editarki/:id', component: EditarKiComponent }

=======
  {path: 'transformaciones/:id/editar/:transformacionId', component: EditTransformacionComponent },
  {path: 'personajes', component: MenuPersonajesComponent}
>>>>>>> 2c114b9d5bfadd0c0248a5a6b123979932a201b8
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
