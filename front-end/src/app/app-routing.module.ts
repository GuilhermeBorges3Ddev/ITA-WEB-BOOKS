import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes roteados
import { HomeComponent } from './home/home.component';
import { categoriaAsp } from './categorias/categoriaAsp/categoriaAsp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoriaMysqlComponent } from './categorias/categoriaMysql/categoriaMysql.component';
import { categoriaPhp } from './categorias/categoriaPhp/categoriaPhp.component';
import { categoriaRegex } from './categorias/categoriaRegex/categoriaRegex.component';
import { categoriaSql } from './categorias/categoriaSql/categoriaSql.component';
import { categoriaWebUsability } from './categorias/categoriaWebUsability/categoriaWebUsability.component';
import { categoriaWebServices } from './categorias/categoriaWebServices/categoriaWebServices.component';
import { categoriaMorseCode } from './categorias/categoriaMorseCode/categoriaMorseCode.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'listarAsp', component: categoriaAsp},
  {path: 'listarMysql', component: CategoriaMysqlComponent},
  {path: 'listarPhp', component: categoriaPhp},
  {path: 'listarRegex', component: categoriaRegex},
  {path: 'listarSql', component: categoriaSql},
  {path: 'listarWebUsability', component: categoriaWebUsability},
  {path: 'listarWebServices', component: categoriaWebServices},
  {path: 'listarMorseCode', component: categoriaMorseCode},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
