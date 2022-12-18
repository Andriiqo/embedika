import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { CountriesService } from 'src/app/services/storages/countries.service';
import { Country } from 'src/app/types/Country.types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  filteredCountries$: Observable<Country[]>;
  loading$: Observable<boolean> ;

  constructor(private countriesService: CountriesService) {
    this.filteredCountries$ = this.countriesService.data$
    this.loading$ = this.countriesService.loading$
  }
  
  ngOnInit(): void {
    this.countriesService.setData()
  }
}
