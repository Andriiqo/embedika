import { Component, Input } from '@angular/core';

interface Table {
  title?: String,
  value?: String,
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() tables: Table[] = []
}
