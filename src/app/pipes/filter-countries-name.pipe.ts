import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../types/Country.types';

@Pipe({
  name: 'filterCountriesName'
})
export class FilterCountriesNamePipe implements PipeTransform {

  transform(countries: Country[], search: string): Country[] {
    return countries.filter(coutry => coutry.name?.toLowerCase().includes(search.toLowerCase()))
  }

}
