import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Comunicando nosso front com o arquivo de backend "server.ts"
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { categoriaAsp } from './categorias/categoriaAsp/categoriaAsp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoriaMysqlComponent } from './categorias/categoriaMysql/categoriaMysql.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    categoriaAsp,
    PageNotFoundComponent,
    CategoriaMysqlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
