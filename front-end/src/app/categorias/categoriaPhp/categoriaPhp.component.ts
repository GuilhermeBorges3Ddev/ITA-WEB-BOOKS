import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'categoriaPhp',
  templateUrl: './categoriaPhp.component.html',
  styleUrls: ['./categoriaPhp.component.css']
})
export class categoriaPhp implements OnInit {

  bookscats = this.http.get<any[]>('http://localhost:4201/listar/1');

  constructor(private http: HttpClient) { }

  get(){
    this.http.get('http://localhost:4201/listar/1');
  }

  ngOnInit() {
  }

}
