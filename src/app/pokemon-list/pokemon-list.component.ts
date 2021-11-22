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

  constructor(private pokeService: pokedexService) { }

  ngOnInit(): void {
    this.pokeService.apiListAllPokemons().subscribe(
      res=>{
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      } 
    );
  }

  public dynamicSearch(value: string){
    const filter = this.setAllPokemons.filter(
      (res: any) =>{
        return !res.name.indexOf(value.toLowerCase());
      },
      (error: any)=>{
        console.log(error);
      });
      this.getAllPokemons = filter;
  }

}
