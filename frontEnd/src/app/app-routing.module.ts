import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListEmpresasComponent } from './components/list-empresas/list-empresas.component';
import { AddEditEmpresasComponent } from './components/add-edit-empresas/add-edit-empresas.component';

const routes: Routes = [
  {path:``, component:ListEmpresasComponent},
  {path:`add`, component: AddEditEmpresasComponent},
  {path:`edit/:id`, component: AddEditEmpresasComponent},
  {path:`**`, redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
