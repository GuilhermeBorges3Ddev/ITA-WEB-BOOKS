import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'categoriaWebUsability',
  templateUrl: './categoriaWebUsability.component.html',
  styleUrls: ['./categoriaWebUsability.component.css']
})
export class categoriaWebUsability implements OnInit {

  bookscats = this.http.get<any[]>('http://localhost:4201/listar/3');

  constructor(private http: HttpClient) { }

  get(){
    this.http.get('http://localhost:4201/listar/3');
  }

  ngOnInit() {
  }

}
