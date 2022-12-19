import { Component } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  search: string;

  constructor(public filterService: FilterService) {
    this.search = this.filterService.search
  }
}