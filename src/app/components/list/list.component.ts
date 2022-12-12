import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Country } from 'src/app/types/Country.types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ListService],
})
export class ListComponent implements OnInit {
  constructor(private listService: ListService) {}

  loading = true
  countries: Country[] = []
  error: null | string = null

  ngOnInit(): void {
    this.listService.getList().subscribe(({data}: Record<string, Country[]>) => {
      // @ts-ignore
      this.countries = data.countries;
      this.loading = false;
    })
  }
}
