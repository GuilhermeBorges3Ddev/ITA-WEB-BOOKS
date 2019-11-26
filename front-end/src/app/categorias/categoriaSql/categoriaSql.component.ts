import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'categoriaSql',
  templateUrl: './categoriaSql.component.html',
  styleUrls: ['./categoriaSql.component.css']
})
export class categoriaSql implements OnInit {

  bookscats = this.http.get<any[]>('http://localhost:4201/listar/4');

  constructor(private http: HttpClient) { }

  get(){
    this.http.get('http://localhost:4201/listar/4');
  }

  ngOnInit() {
  }

}
