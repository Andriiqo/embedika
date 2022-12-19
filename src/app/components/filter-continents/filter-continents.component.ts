import { Component } from '@angular/core';
import { ALL_CONTINETS } from 'src/app/const/continents';
import { FilterService } from 'src/app/services/ui/filter.service';

@Component({
  selector: 'app-filter-continents',
  templateUrl: './filter-continents.component.html',
  styleUrls: ['./filter-continents.component.scss']
})
export class FilterContinentsComponent {
  constructor(public filterService: FilterService) {}

  listContinents = ALL_CONTINETS;
}
