import { Component } from '@angular/core';

//Comunicando nosso front com o arquivo de backend "server.ts via: "
//app.component.ts -----> app.module.ts
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  messages = this.http.get<any[]>('http://localhost:4201');

  constructor(private http: HttpClient) { }
}
