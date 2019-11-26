import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categoria-mysql',
  templateUrl: './categoriaMysql.component.html',
  styleUrls: ['./categoriaMysql.component.css']
})
export class CategoriaMysqlComponent implements OnInit {

  bookscats = this.http.get<any[]>('http://localhost:4201/listar/2');

  constructor(private http: HttpClient) { }

  get(){
    this.http.get('http://localhost:4201/listar/2');
  }

  ngOnInit() {
  }

}
