import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  navbarOpen = false;


  bookscats = this.http.get<any[]>('http://localhost:4201/buscar/:searchkey?');

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  search(searchkey){
    this.http.get(`http://localhost:4201/buscar/${searchkey}`);
  }
  
  constructor(private http: HttpClient) { }

}
