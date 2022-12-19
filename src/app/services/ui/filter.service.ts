import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  // filter name
  search = ''
  
  // filter continents
  selectContinent = ''

  searchFilter(query: string) {
    this.search = query;
  }
  
  continentsFilter(continent: string) {
    this.selectContinent = continent
  }
}
