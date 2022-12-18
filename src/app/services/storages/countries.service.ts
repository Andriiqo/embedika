import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Country } from 'src/app/types/Country.types';
import { ListService } from '../list.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private listService: ListService) { }

  private dataSubject: BehaviorSubject<never[]> = new BehaviorSubject([]);
  data$: Observable<Country[]> = this.dataSubject.asObservable();

  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(true);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  setData() {
    this.listService.getList().subscribe(({data}: any) => {
      this.dataSubject.next(data.countries)
      this.loadingSubject.next(false);
    })
  }
}