import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes roteados
import { HomeComponent } from './home/home.component';
import { categoriaAsp } from './categoriaAsp/categoriaAsp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'listarAsp', component: categoriaAsp},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
