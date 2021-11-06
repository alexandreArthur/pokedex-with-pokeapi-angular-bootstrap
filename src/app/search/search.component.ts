import { pokedexService } from '../services/pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class searchComponent implements OnInit {

  pokemons: any[]= [];
  abilities: any[] = [];

  constructor(private pokeService: pokedexService) { }

  ngOnInit(): void {

  }


}
