import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = '';
  pokemons: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchTitle();
    this.loadPokemons();
  }

  fetchTitle() {
    this.http.get<{ title: string }>('/title').subscribe(response => {
      this.title = response.title;
    });
  }

  loadPokemons() {
    this.http.get<any[]>('https://pokeapi.co/api/v2/pokemon?limit=3').subscribe(response => {
      this.pokemons = response.results;
    });
  }

  loadMorePokemons() {
    this.loadPokemons();
  }
}