import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [CardService],
})
export class CardComponent implements OnInit {
  id: string;
  name = '';

  constructor(private activateRoute: ActivatedRoute, private cardService: CardService) {
      this.id = activateRoute.snapshot.params['id']
  }

  ngOnInit() {
    console.log(this.id)
    this.cardService.getCard(this.id).subscribe(({data}: any) => {
      this.name = data.country.name;
    })
  }
}
