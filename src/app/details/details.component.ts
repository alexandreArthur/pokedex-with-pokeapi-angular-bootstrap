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

  public pokemon: any;
  public isLoading: boolean = false;
  public errorLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokedexService: pokedexService
  ) { }

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const pokemon = this.pokedexService.apiGetPokemons(`${this.UrlPokemon}/${id}`);
    const name = this.pokedexService.apiGetPokemons(`${this.UrlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res=>{
          this.pokemon = res;
          this.isLoading = true;
      },
      error =>{
          this.errorLoading = true;
      }
    );
  }

}
