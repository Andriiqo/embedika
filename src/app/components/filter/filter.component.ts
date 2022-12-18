import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  
  query: string = '';

  @Output() onQuery: EventEmitter<string> = new EventEmitter();

  constructor() {}

    public onChangeSearch(event: KeyboardEvent) {
        // this.onQuery.emit(this.query)
        console.log(event)
    }
}