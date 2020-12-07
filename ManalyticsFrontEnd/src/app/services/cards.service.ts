import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import Card from '../classes/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  api: string = environment.cardsApi;
  constructor(private httpClient: HttpClient) { }

  public getAllCards() {
    return this.httpClient.get<{
      message: string,
      results: number,
      cards: Card[]
    }>(this.api);
  }

  public getCardsByName(name: string) {
    console.log(`${this.api}search/name/${name}`);
    return this.httpClient.get<{
      message: string,
      results: number,
      cards: Card[]
    }>(this.api + 'search/name/' + name);
  }
}
