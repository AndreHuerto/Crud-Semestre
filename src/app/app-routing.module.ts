import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSemestreComponent } from './Components/Semestre/add-semestre/add-semestre.component';
import { EditarSemestreComponent } from './Components/Semestre/editar-semestre/editar-semestre.component';
import { ListarSemestreComponent } from './Components/Semestre/listar-semestre/listar-semestre.component';


const routes: Routes = [
  { path: 'all', component: ListarSemestreComponent},
  { path: "semestre/add", component: AddSemestreComponent },
  { path: "editar/:id", component: EditarSemestreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
