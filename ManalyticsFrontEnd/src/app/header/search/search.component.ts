import { Component, OnInit } from '@angular/core';

import {CardsService} from '../../services/cards.service';

import Card from '../../shared/models/card';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults: Card[] = [];
  constructor(private cardsService: CardsService) { 
  }

  ngOnInit(): void {
    
  }

  onSearchInputChange(input: string): void {
    if(input.length <= 0) { return ;}
    this.cardsService.getCardsByName(input).subscribe((res) => {
      console.log(res);
      if(res.results > 0) {
        this.searchResults = res.cards;
      } else {
        this.searchResults = [];
      }
      console.log(this.searchResults);
    })
  }

}
