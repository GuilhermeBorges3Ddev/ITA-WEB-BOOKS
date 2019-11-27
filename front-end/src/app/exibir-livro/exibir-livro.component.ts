import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exibir-livro',
  templateUrl: './exibir-livro.component.html',
  styleUrls: ['./exibir-livro.component.css']
})
export class ExibirLivroComponent implements OnInit {

  books = this.http.get<any[]>('http://localhost:4201/exibir/:ISBN?');

  constructor(private http: HttpClient) { }

  get() {
    this.http.get("http://localhost:4201/exibir/:ISBN?")
  }

  ngOnInit(){}

}
