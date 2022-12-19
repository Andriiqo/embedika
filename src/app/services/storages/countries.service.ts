import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { Country } from 'src/app/types/Country.types';
import { ListService } from '../list.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private listService: ListService) { }

  // data
  private dataSubject: BehaviorSubject<any> = new BehaviorSubject([]);
  data$: Observable<Country[]> = this.dataSubject.asObservable();
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(true);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  // because this API has no filter method
  // filters on frontend
  search = '';

  // methods
  setData() {
    this.listService.getList().subscribe(({data}: any) => {
      this.dataSubject.next(data.countries)
      this.loadingSubject.next(false);
    })
  }

  searchFilter(query: string) {
    this.search = query;
    console.log(this.search)
  }
}
