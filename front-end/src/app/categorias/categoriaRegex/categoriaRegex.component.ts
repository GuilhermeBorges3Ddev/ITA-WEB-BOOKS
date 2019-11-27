import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'categoriaRegex',
  templateUrl: './categoriaRegex.component.html',
  styleUrls: ['./categoriaRegex.component.css']
})
export class categoriaRegex implements OnInit {

  bookscats = this.http.get<any[]>('http://localhost:4201/listar/6');

  constructor(private http: HttpClient) { }

  get(){
    this.http.get('http://localhost:4201/listar/6');
  }

  ngOnInit() {
  }

}
