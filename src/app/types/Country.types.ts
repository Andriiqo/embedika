export type Language = {
    code?: String;
    name?: String;
    native?: String;
    rtl?: Boolean;
}

export type Country = {
    code?: String;
    name?: String;
    native?: String;
    phone?: String;
    continent?: Continent;
    capital?: String
    currency?: String
    languages?: Language[];
    emoji?: String;
    emojiU?: String;
    states?: State[];
}

export type State = {
    code?: String;
    name?: String;
    country?: Country;
}

export type Continent = {
    code?: String;
    name?: String;
    countries?: Country[];
}

export interface CoutryRespons {
    code?: string
    name?: string
    phone?: string
    continent?: string
  }