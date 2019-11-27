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
import { categoriaPhp } from './categorias/categoriaPhp/categoriaPhp.component';
import { categoriaRegex } from './categorias/categoriaRegex/categoriaRegex.component';
import { categoriaSql } from './categorias/categoriaSql/categoriaSql.component';
import { categoriaWebUsability } from './categorias/categoriaWebUsability/categoriaWebUsability.component';
import { categoriaWebServices } from './categorias/categoriaWebServices/categoriaWebServices.component';
import { categoriaMorseCode } from './categorias/categoriaMorseCode/categoriaMorseCode.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ExibirLivroComponent } from './exibir-livro/exibir-livro.component';
import { VerificaClienteComponent } from './verifica-cliente/verifica-cliente.component';
import { CadastraClienteComponent } from './cadastra-cliente/cadastra-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    categoriaAsp,
    PageNotFoundComponent,
    CategoriaMysqlComponent,
    categoriaPhp,
    categoriaRegex,
    categoriaSql,
    categoriaWebUsability,
    categoriaWebServices,
    categoriaMorseCode,
    CarrinhoComponent,
    ExibirLivroComponent,
    VerificaClienteComponent,
    CadastraClienteComponent
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
