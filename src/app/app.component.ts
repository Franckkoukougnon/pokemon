import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pokemon';
  pokemonList = POKEMONS;

  selectedPokemon(Pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le Pokemon ${Pokemon.name}`);
  }

  constructor() {}
  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectedPokemon(this.pokemonList[0]);
  }
}
