import { pokedexService } from './../services/pokedex.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private UrlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private UrlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokedexService: pokedexService
  ) { }

  ngOnInit(): void {
    this.pokemon;
  }

  get pokemon(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const pokemon = this.pokedexService.apiGetPokemons(`${this.UrlPokemon}/${id}`);
    const name = this.pokedexService.apiGetPokemons(`${this.UrlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res=>{
          console.log(res);
      }
    );
  }

}
