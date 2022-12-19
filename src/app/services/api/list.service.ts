import { Injectable } from '@angular/core';
import { Apollo, ApolloBase } from 'apollo-angular';
import { GET_COUNTRIES_LIST } from 'src/app/gql/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apollo: ApolloBase;

  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('list')
  }

  getList(filterNotIn: string[]) {
    return this.apollo.query({
      query: GET_COUNTRIES_LIST,
      variables: {
        filter: {
          continent: {
            nin: filterNotIn
          }
        }
      }
    })
  }
}
