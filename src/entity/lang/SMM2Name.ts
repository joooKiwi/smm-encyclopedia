import {AmericanAndEuropeanLanguage} from "./AmericanAndEuropeanLanguage";
import {CanadianAndEuropeanLanguage} from "./CanadianAndEuropeanLanguage";
import {ChineseLanguage} from "./ChineseLanguage";
import {SimpleLanguage} from "./SimpleLanguage";

export interface SMM2Name {

    japanese: SimpleLanguage

    english: AmericanAndEuropeanLanguage

    spanish: AmericanAndEuropeanLanguage

    french: CanadianAndEuropeanLanguage

    dutch: SimpleLanguage

    german: SimpleLanguage

    italian: SimpleLanguage

    russian: SimpleLanguage

    korean: SimpleLanguage

    chinese: ChineseLanguage

}