import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'categoriaAsp',
  templateUrl: './categoriaAsp.component.html',
  styleUrls: ['./categoriaAsp.component.css']
})
export class categoriaAsp implements OnInit {

  bookscats = this.http.get<any[]>('http://localhost:4201/listar/5?');

  constructor(private http: HttpClient) { }

  get(){
    this.http.get('http://localhost:4201/listar/5');
  }

  ngOnInit() {
  }

}
