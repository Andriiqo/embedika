import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountriesService } from 'src/app/services/storages/countries.service';
import { Country } from 'src/app/types/Country.types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy  {

  filteredCountries: Country[] = [];
  subscription: Subscription;

  constructor(private countriesService: CountriesService) {
    this.subscription = this.countriesService.data$.subscribe(data => this.filteredCountries = data)
  }

  ngOnInit(): void {
    this.countriesService.setData()
  }

  ngOnDestroy(): void {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
    }
  }
  
}
