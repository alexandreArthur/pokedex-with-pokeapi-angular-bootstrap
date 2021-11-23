import { pokedexService } from './../services/pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;
  public isLoading: boolean = false;
  public errorLoading: boolean = false;

  constructor(private pokeService: pokedexService) { }

  ngOnInit(): void {
    this.pokeService.apiListAllPokemons().subscribe(
      res=>{
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        this.isLoading = true;
      },
      error =>{
        this.errorLoading = true;

      }
    );
  }

  public dynamicSearch(value: string){
    const filter = this.setAllPokemons.filter(
      (res: any) =>{
        return !res.name.indexOf(value.toLowerCase());
      },
      (error: any)=>{
      });
      this.getAllPokemons = filter;
  }

}
