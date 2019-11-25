import { Component, OnInit } from '@angular/core';

//Comunicando nosso front com o arquivo de backend "server.ts via: "
//sidebar.component.ts -----> app.module.ts
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidelinks = this.http.get<any[]>('http://localhost:4201/listar/:CategoryID?');

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:4201/listar/:CategoryID?")
  }

}