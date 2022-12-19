import { Injectable } from '@angular/core';
import { ALL_CONTINETS } from '../const/continents';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }
  
  continents = ALL_CONTINETS;
  // filter on frontend, because this API has no filter method
  search = '';

  searchFilter(query: string) {
    this.search = query;
    console.log(this.continents)
  }
}
