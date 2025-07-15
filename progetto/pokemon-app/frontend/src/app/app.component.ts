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
  offset: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchTitle();
    this.loadPokemons();
  }

  fetchTitle() {
    this.http.get<{ title: string }>('/api/title').subscribe(response => {
      this.title = response.title;
    });
  }

  loadPokemons() {
    this.http.get<any[]>(`/api/pokemon?offset=${this.offset}`).subscribe(response => {
      this.pokemons = response;
    });
  }

  loadMore() {
    this.offset += 3;
    this.loadPokemons();
  }
}