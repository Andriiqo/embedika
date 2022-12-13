import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/card.service';
import { Country } from 'src/app/types/Country.types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [CardService],
})
export class CardComponent implements OnInit {
  id: string;
  country: Country = {};

  constructor(private activateRoute: ActivatedRoute, private cardService: CardService) {
      this.id = activateRoute.snapshot.params['id']
  }

  ngOnInit() {
    this.cardService.getCard(this.id).subscribe(({data}: any) => {
      this.country = data.country;
    })
  }
}
