/**
 * <p>
 *     A class with every languages used in the project.
 *     But, it does not contain every simple languages.
 * </p>
 *
 * <p>
 *     As an example, the english language only contain the America and the Europe,
 *     but not the simple language.
 * </p>
 */
export interface ClassWithLanguages {

    get americanEnglish(): string

    get europeanEnglish(): string


    get canadianFrench(): string

    get europeanFrench(): string


    get german(): string


    get americanSpanish(): string

    get europeanSpanish(): string


    get italian(): string


    get dutch(): string


    get americanPortuguese(): string

    get europeanPortuguese(): string


    get russian(): string


    get japanese(): string


    get simplifiedChinese(): string

    get traditionalChinese(): string


    get korean(): string

}