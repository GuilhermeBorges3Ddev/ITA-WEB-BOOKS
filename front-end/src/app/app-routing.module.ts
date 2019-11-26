import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes roteados
import { HomeComponent } from './home/home.component';
import { categoriaAsp } from './categorias/categoriaAsp/categoriaAsp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoriaMysqlComponent } from './categorias/categoriaMysql/categoriaMysql.component';
import { categoriaPhp } from './categorias/categoriaPhp/categoriaPhp.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'listarAsp', component: categoriaAsp},
  {path: 'listarMysql', component: CategoriaMysqlComponent},
  {path: 'listarPhp', component: categoriaPhp},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
