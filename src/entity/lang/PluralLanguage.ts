import {SimpleLanguage} from "./SimpleLanguage";

export interface PluralLanguage<T extends string>
    extends SimpleLanguage {

    get(language: T): string


}