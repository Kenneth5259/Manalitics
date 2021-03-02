/**
 * Kenneth Carroll 
 * 3/2/2021
 * Revision 1
 */

 // Angular imports
import { Component, OnInit } from '@angular/core';

// Local Imports
import {CardsService} from '../../services/cards.service';
import Card from '../../shared/models/card';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // initialize an empty local store
  searchResults: Card[] = [];

  // inject the card service dependency
  constructor(private cardsService: CardsService) { 
  }

  ngOnInit(): void {
    
  }

  // define a method for handling changes on input
  onSearchInputChange(input: string): void {

    // Validate the length
    if(input.length <= 0) { return ;}

    // query the service
    this.cardsService.getCardsByName(input).subscribe((res) => {

      //debug logging for the results
      console.log(res);

      // validate if there are any results
      if(res.results > 0) {

        // update the local store
        this.searchResults = res.cards;
      } else {

        // clear the local store
        this.searchResults = [];
      }

      // additional console logging for debug
      console.log(this.searchResults);
    })
  }

}
