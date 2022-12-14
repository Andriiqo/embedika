import { Injectable } from '@angular/core';
import { Apollo, ApolloBase } from 'apollo-angular';
import { GET_COUNTRIES_LIST } from '../gql/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apollo: ApolloBase;

  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('list')
  }

  getList(): any {
    return this.apollo.query({
      query: GET_COUNTRIES_LIST,
      variables: {
        filter: {
          code: {
            in: "EU"
          }
        }
      }
    })
  }
}
