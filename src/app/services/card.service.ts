import { Injectable } from '@angular/core';
import { Apollo, ApolloBase, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apollo: ApolloBase;

  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('list')
  }

  getCard(id: string): any {
    return this.apollo.query({
      query: gql`
        query country($code: ID!) {
          country(code: $code) {
            name
          }
        }
      `,
      variables: {
        code: id
      }
    })
  }
}
