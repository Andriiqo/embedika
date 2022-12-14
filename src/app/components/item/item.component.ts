import { Component, Input } from '@angular/core';
import { CoutryRespons } from 'src/app/types/Country.types';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() country: CoutryRespons = {};
}
