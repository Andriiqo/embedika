import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/api/card.service';
import { Country } from 'src/app/types/Country.types';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  providers: [CardService],
})
export class CountryComponent implements OnInit {
  id: string;
  country: Country = {};

  constructor(activateRoute: ActivatedRoute, private cardService: CardService) {
      this.id = activateRoute.snapshot.params['id']
  }

  ngOnInit() {
    this.cardService.getCard(this.id).subscribe(({data}: any) => {
      this.country = data.country;
    })
  }
}
