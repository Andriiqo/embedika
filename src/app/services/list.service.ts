import { Injectable } from '@angular/core';
import { Apollo, ApolloBase, gql } from 'apollo-angular';

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
      query: gql`
        {
          countries {
            name
            continent {
              name
            }
            phone
          }
        }
      `
    })
  }
}
