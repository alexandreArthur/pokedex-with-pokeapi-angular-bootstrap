import { pokedexService } from '../services/pokedex.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class searchComponent implements OnInit {

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  pokemons: any[]= [];
  abilities: any[] = [];

  constructor(private pokeService: pokedexService) { }

  ngOnInit(): void {

  }

  public search(value: string){
    this.emmitSearch.emit(value);
  }




}
