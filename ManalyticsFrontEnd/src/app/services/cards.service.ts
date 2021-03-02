/**
 * Kenneth Carroll
 * 
 * 3/2/2021
 * Service for retrieving cards
 * Revision 1
 */

// angular imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// local environment import
import { environment } from 'src/environments/environment';

// local model import
import Card from '../shared/models/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  // extract API from environment
  api: string = environment.cardsApi;

  // inject htttp client 
  constructor(private httpClient: HttpClient) { }

  //method to return all cards from the database
  public getAllCards() {
    return this.httpClient.get<{
      message: string,
      results: number,
      cards: Card[]
    }>(this.api);
  }

  //method to do a card search by name
  public getCardsByName(name: string) {
    console.log(`${this.api}search/name/${name}`);
    return this.httpClient.get<{
      message: string,
      results: number,
      cards: Card[]
    }>(this.api + 'search/name/' + name);
  }
}
