import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCountriesContinent'
})
export class FilterCountriesContinentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
