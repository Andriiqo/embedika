import { Component, Input } from '@angular/core';
import { Language, State } from 'src/app/types/Country.types';

interface Info {
  title?: string
  data?:  Language[] | State[]
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input() info: Info[] = []
}
