import { gql } from "apollo-angular";

export const GET_COUNTRIES_LIST = gql`
query ($filter: ContinentFilterInput) {
  continents(filter: $filter) {
    code
    name
    countries {
      code
      name
      phone
    }
  }
}
`

export const GET_COUNTRY_BY_ID = gql`
query ($code: ID!) {
  country(code: $code) {
    code
    name
    native
    phone
    continent {
      name
    }
    capital
    currency
    languages {
      name
    }
    emoji
    emojiU
    states {
      name
    }
  }
}
`