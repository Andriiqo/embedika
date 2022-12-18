import { gql } from "apollo-angular";

export const GET_COUNTRIES_LIST = gql`
query ($filter: CountryFilterInput) {
  countries(filter: $filter) {
    code
    name
    phone
    continent {
      code
      name
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