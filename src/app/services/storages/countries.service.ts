import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { Country } from 'src/app/types/Country.types';
import { ListService } from '../list.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private listService: ListService) { }

  private dataSubject: BehaviorSubject<any> = new BehaviorSubject([]);
  data$: Observable<Country[]> = this.dataSubject.asObservable();
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(true);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  setData(continents: string[]) {
    this.listService.getList(continents).subscribe(({data}: any) => {
      this.dataSubject.next(data.countries)
      this.loadingSubject.next(false);
    })
  }
}
