import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadoComponent } from './Components/create-empleado/create-empleado.component';
import { ListEmpleadosComponent } from './Components/list-empleados/list-empleados.component';

const routes: Routes = [
  {path: '', redirectTo:'list-empleados', pathMatch: 'full'},
  {path: 'list-empleados', component: ListEmpleadosComponent},
  {path: 'create-empleado', component: CreateEmpleadoComponent},
  {path: '**', redirectTo:'list-empleados', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }