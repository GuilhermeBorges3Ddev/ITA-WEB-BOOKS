import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'categoriaWebServices.component',
  templateUrl: './categoriaWebServices.component.html',
  styleUrls: ['./categoriaWebServices.component.css']
})
export class categoriaWebServices implements OnInit {

  bookscats = this.http.get<any[]>('http://localhost:4201/listar/7');

  constructor(private http: HttpClient) { }

  get(){
    this.http.get('http://localhost:4201/listar/7');
  }

  ngOnInit() {
  }

}
