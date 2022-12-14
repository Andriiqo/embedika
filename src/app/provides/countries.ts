import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { NamedOptions } from "apollo-angular";

export function apolloFactoryCountries (httpLink: HttpLink): NamedOptions {
    return {
      list: {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: 'https://countries.trevorblades.com'
        })
      }
    }
  }