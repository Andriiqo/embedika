import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  countries: any[] | undefined
  loading = true
  error: any
 
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .query({
        query: gql`
          {
            countries {
              name
            }
          }
        `
      })
      .subscribe((result: any) => {
        this.countries = result.data.countries
        this.loading = result.loading
        this.error = result.error
      })
  }
}
