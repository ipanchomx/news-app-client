import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasComponent } from './pages/noticias/noticias.component';
import { TitularesComponent } from './pages/titulares/titulares.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  { path : "", redirectTo : 'noticias', pathMatch : 'full'},
  { path : "noticias", component : NoticiasComponent},
  { path : "titulares", component : TitularesComponent},
  { path : "**", component : Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
