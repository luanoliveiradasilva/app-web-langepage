import { FormularioComponent } from './pages/formulario/formulario.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'cadastro', pathMatch: 'full'},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'formulario', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
