import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { CoutryRespons } from 'src/app/types/Country.types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ListService],
})
export class ListComponent implements OnInit {
  constructor(private listService: ListService) {}

  loading = true
  countries: CoutryRespons[] = []
  error: null | string = null

  ngOnInit(): void {
    this.listService.getList().subscribe(({data}: any) => {
      data.continents.forEach((item: any) => {
        item.countries.forEach((country: CoutryRespons) => {
          this.countries.push({...country, continent: item.name})
        });
      })
      this.loading = false;
    })
  }
}
