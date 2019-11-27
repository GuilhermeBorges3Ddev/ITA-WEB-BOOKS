import { Component, OnInit } from '@angular/core';

//Comunicando nosso front com o arquivo de backend "server.ts via: "
//app.component.ts -----> app.module.ts
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  messages = this.http.get<any[]>('http://localhost:4201');

  constructor(private http: HttpClient) { }

  get() {
    this.http.get("http://localhost:4201")
  }

  ngOnInit(){}

}
