import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'categoriaMorseCode',
  templateUrl: './categoriaMorseCode.component.html',
  styleUrls: ['./categoriaMorseCode.component.css']
})
export class categoriaMorseCode implements OnInit {

  bookscats = this.http.get<any[]>('http://localhost:4201/listar/8');

  constructor(private http: HttpClient) { }

  get(){
    this.http.get('http://localhost:4201/listar/8');
  }

  ngOnInit() {
  }

}
