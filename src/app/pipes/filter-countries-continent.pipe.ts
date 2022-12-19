import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../types/Country.types';

@Pipe({
  name: 'filterCountriesContinent'
})
export class FilterCountriesContinentPipe implements PipeTransform {

  transform(countries: Country[], selectContinent: string): Country[] {
    return countries.filter(country => country.continent?.code?.toLowerCase().includes(selectContinent.toLowerCase()))
  }

}
