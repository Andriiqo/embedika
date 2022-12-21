import { Injectable } from '@angular/core';
import { Apollo, ApolloBase } from 'apollo-angular';
import { GET_COUNTRY_BY_ID } from 'src/app/gql/list';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apollo: ApolloBase;

  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('list')
  }

  getCard(code: string) {
    return this.apollo.query({
      query: GET_COUNTRY_BY_ID,
      variables: {
        code
      }
    })
  }
}
