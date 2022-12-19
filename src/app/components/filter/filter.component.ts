import { Component } from '@angular/core';
import { CountriesService } from 'src/app/services/storages/countries.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  search: string;

  constructor(public countriesService: CountriesService) {
    this.search = this.countriesService.search;
  }
}