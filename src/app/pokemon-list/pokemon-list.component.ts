import { pokedexService } from './../services/pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(private pokeService: pokedexService) { }

  ngOnInit(): void {
    this.pokeService.apiListAllPokemons().subscribe(
      res=> console.log(res)
    );
  }

}
