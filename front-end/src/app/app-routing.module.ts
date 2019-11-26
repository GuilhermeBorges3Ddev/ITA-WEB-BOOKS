import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes roteados
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'buscar/1', component: CategoriesComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
