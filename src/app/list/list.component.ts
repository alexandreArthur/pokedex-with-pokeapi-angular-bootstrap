import { pokedexService } from './../services/pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemons: any[]= [];
  abilities: any[] = [];

  constructor(private pokeService: pokedexService) { }

  ngOnInit(): void {

  }


}
