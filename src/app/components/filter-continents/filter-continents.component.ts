import { Component, OnInit } from '@angular/core';
import { ALL_CONTINETS } from 'src/app/const/continents';
import { FilterService } from 'src/app/services/ui/filter.service';

@Component({
  selector: 'app-filter-continents',
  templateUrl: './filter-continents.component.html',
  styleUrls: ['./filter-continents.component.scss']
})
export class FilterContinentsComponent implements OnInit{

  public activeRadioButton: string;

  constructor(public filterService: FilterService) {
    this.activeRadioButton = filterService.selectContinent
  }

  listContinents = ALL_CONTINETS;

  ngOnInit() {
    this.activeRadioButton = this.filterService.selectContinent;
    console.log(this.activeRadioButton)
  }
}
