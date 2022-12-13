import { gql } from "apollo-angular";

export const GET_COUNTRIES_LIST = gql`
query countries {
  countries {
    code
    name
    continent {
      name
    }
    phone
  }
}
`

export const GET_COUNTRY_BY_ID = gql`
query country($code: ID!) {
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