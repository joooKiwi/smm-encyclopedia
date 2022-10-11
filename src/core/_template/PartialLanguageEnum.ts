export interface PartialLanguagesEnum {

    english: number
    americanEnglish: number
    europeanEnglish: number

    french: number
    canadianFrench: number
    europeanFrench: number

    german: number

    spanish: number
    americanSpanish: number
    europeanSpanish: number

    italian: number

    dutch: number

    portuguese: number
    americanPortuguese: number
    europeanPortuguese: number

    russian: number

    japanese: number

    chinese: number
    traditionalChinese: number
    simplifiedChinese: number

    korean: number

}

export interface PartialLanguagesEnumWithOptionalLanguages
    extends PartialLanguagesEnum {

    hebrew: number

    polish: number

    ukrainian: number

    greek: number

}

export type PossibleLanguagesDefinition = | PartialLanguagesEnum | PartialLanguagesEnumWithOptionalLanguages
