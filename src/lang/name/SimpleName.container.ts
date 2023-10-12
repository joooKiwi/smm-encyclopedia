import type {EmptyableOptionalLanguage}                                                                                                                         from 'lang/name/containers/EmptyableOptionalLanguage'
import type {EmptyableLanguage}                                                                                                                                 from 'lang/name/containers/EmptyableLanguage'
import type {AmericanOrEuropeanArray, AmericanOrEuropeanOriginal, CanadianOrEuropeanArray, CanadianOrEuropeanOriginal, ChineseArray, ChineseOriginal, Language} from 'lang/name/containers/Language'
import type {OptionalLanguage}                                                                                                                                  from 'lang/name/containers/OptionalLanguage'

import {EveryLanguages}                   from 'lang/EveryLanguages'
import {ProjectLanguages}                 from 'lang/ProjectLanguages'
import {newLanguage, newOptionalLanguage} from 'lang/name/containers/Language.provider'

//region -------------------- Import from deconstruction --------------------

const {ENGLISH, FRENCH, GERMAN, SPANISH, ITALIAN, DUTCH, PORTUGUESE, RUSSIAN, JAPANESE, CHINESE, KOREAN, HEBREW, POLISH, UKRAINIAN, GREEK,} = EveryLanguages

//endregion -------------------- Import from deconstruction --------------------

//TODO make this class the base parent or another one to remove the duplicate code
export class SimpleNameContainer<T extends NonNullable<unknown>,> {

    //region -------------------- Fields --------------------

    public static readonly OPTIONAL_LANGUAGES = [HEBREW, POLISH, UKRAINIAN, GREEK,] as const

    readonly #originalLanguages: readonly EveryLanguages[]
    #map?: Map<EveryLanguages, T>

    readonly #englishContainer: Language<T, T, AmericanOrEuropeanArray<T>>
    readonly #frenchContainer: EmptyableLanguage<T, T, CanadianOrEuropeanArray<T>>
    readonly #germanContainer: EmptyableLanguage<T, T, never>
    readonly #spanishContainer: EmptyableLanguage<T, T, AmericanOrEuropeanArray<T>>
    readonly #italianContainer: EmptyableLanguage<T, T, never>
    readonly #dutchContainer: EmptyableLanguage<T, T, never>
    readonly #portugueseContainer: EmptyableLanguage<T, T, AmericanOrEuropeanArray<T>>
    readonly #russianContainer: EmptyableLanguage<T, T, never>
    readonly #japaneseContainer: EmptyableLanguage<T, T, never>
    readonly #chineseContainer: EmptyableLanguage<T, T, ChineseArray<T>>
    readonly #koreanContainer: EmptyableLanguage<T, T, never>
    readonly #hebrewContainer: EmptyableOptionalLanguage<T, T, never>
    readonly #polishContainer: EmptyableOptionalLanguage<T, T, never>
    readonly #ukrainianContainer: EmptyableOptionalLanguage<T, T, never>
    readonly #greekContainer: EmptyableOptionalLanguage<T, T, never>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(english: AmericanOrEuropeanOriginal<T>,
                       french: Nullable<CanadianOrEuropeanOriginal<T>>,
                       german: Nullable<T>,
                       spanish: Nullable<AmericanOrEuropeanOriginal<T>>,
                       italian: Nullable<T>,
                       dutch: Nullable<T>,
                       portuguese: Nullable<AmericanOrEuropeanOriginal<T>>,
                       russian: Nullable<T>,
                       japanese: Nullable<T>,
                       chinese: Nullable<ChineseOriginal<T>>,
                       korean: Nullable<T>,
                       hebrew: Nullable<T>,
                       polish: Nullable<T>,
                       ukrainian: Nullable<T>,
                       greek: Nullable<T>,) {
        const originalLanguages: EveryLanguages[] = []

        this.#englishContainer = SimpleNameContainer.#newLanguageContainer<T, T, AmericanOrEuropeanArray<T>>(ENGLISH, originalLanguages, english,)
        this.#frenchContainer = SimpleNameContainer.#newLanguageContainer<T, T, CanadianOrEuropeanArray<T>>(FRENCH, originalLanguages, french,)
        this.#germanContainer = SimpleNameContainer.#newLanguageContainer<T, T>(GERMAN, originalLanguages, german,)
        this.#spanishContainer = SimpleNameContainer.#newLanguageContainer<T, T, AmericanOrEuropeanArray<T>>(SPANISH, originalLanguages, spanish,)
        this.#italianContainer = SimpleNameContainer.#newLanguageContainer<T, T>(ITALIAN, originalLanguages, italian,)
        this.#dutchContainer = SimpleNameContainer.#newLanguageContainer<T, T>(DUTCH, originalLanguages, dutch,)
        this.#portugueseContainer = SimpleNameContainer.#newLanguageContainer<T, T, AmericanOrEuropeanArray<T>>(PORTUGUESE, originalLanguages, portuguese,)
        this.#russianContainer = SimpleNameContainer.#newLanguageContainer<T, T>(RUSSIAN, originalLanguages, russian,)
        this.#japaneseContainer = SimpleNameContainer.#newLanguageContainer<T, T>(JAPANESE, originalLanguages, japanese,)
        this.#chineseContainer = SimpleNameContainer.#newLanguageContainer<T, T, ChineseArray<T>>(CHINESE, originalLanguages, chinese,)
        this.#koreanContainer = SimpleNameContainer.#newLanguageContainer<T, T>(KOREAN, originalLanguages, korean,)
        this.#hebrewContainer = SimpleNameContainer.#newLanguageContainer<T, T>(HEBREW, originalLanguages, hebrew,)
        this.#polishContainer = SimpleNameContainer.#newLanguageContainer<T, T>(POLISH, originalLanguages, polish,)
        this.#ukrainianContainer = SimpleNameContainer.#newLanguageContainer<T, T>(UKRAINIAN, originalLanguages, ukrainian,)
        this.#greekContainer = SimpleNameContainer.#newLanguageContainer<T, T>(GREEK, originalLanguages, greek,)

        this.#originalLanguages = originalLanguages
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get languageValue(): NonNullable<T> {
        // @ts-ignore: FIXME Support this implementation for the Languages
        return ProjectLanguages.current.get<T>(this) ?? this.english
    }

    //region -------------------- English properties --------------------

    public get originalEnglish(): AmericanOrEuropeanOriginal<T> {
        return this.#englishContainer.original
    }

    public get english(): T {
        return this.#englishContainer.get()
    }

    public get americanEnglish(): T {
        return this.#englishContainer.get(0)
    }

    public get europeanEnglish(): T {
        return this.#englishContainer.get(1)
    }

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    public get originalFrench(): NullOr<CanadianOrEuropeanOriginal<T>> {
        return this.#frenchContainer.original
    }

    public get french(): NullOr<T> {
        return this.#frenchContainer.get()
    }

    public get canadianFrench(): NullOr<T> {
        return this.#frenchContainer.get(0)
    }

    public get europeanFrench(): NullOr<T> {
        return this.#frenchContainer.get(1)
    }

    //endregion -------------------- French properties --------------------
    //region -------------------- German properties --------------------

    public get german(): NullOr<T> {
        return this.#germanContainer.original
    }

    //endregion -------------------- German properties --------------------
    //region -------------------- Spanish properties --------------------

    public get originalSpanish(): NullOr<AmericanOrEuropeanOriginal<T>> {
        return this.#spanishContainer.original
    }

    public get spanish(): NullOr<T> {
        return this.#spanishContainer.get()
    }

    public get americanSpanish(): NullOr<T> {
        return this.#spanishContainer.get(0)
    }

    public get europeanSpanish(): NullOr<T> {
        return this.#spanishContainer.get(1)
    }

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Italian properties --------------------

    public get italian(): NullOr<T> {
        return this.#italianContainer.original
    }

    //endregion -------------------- Italian properties --------------------
    //region -------------------- Dutch properties --------------------

    public get dutch(): NullOr<T> {
        return this.#dutchContainer.original
    }

    //endregion -------------------- Dutch properties --------------------
    //region -------------------- Portuguese properties --------------------

    public get originalPortuguese(): NullOr<AmericanOrEuropeanOriginal<T>> {
        return this.#portugueseContainer.original
    }

    public get portuguese(): NullOr<T> {
        return this.#portugueseContainer.get()
    }

    public get americanPortuguese(): NullOr<T> {
        return this.#portugueseContainer.get(0)
    }

    public get europeanPortuguese(): NullOr<T> {
        return this.#portugueseContainer.get(1)
    }

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Russian properties --------------------

    public get russian(): NullOr<T> {
        return this.#russianContainer.original
    }

    //endregion -------------------- Russian properties --------------------
    //region -------------------- Japanese properties --------------------

    public get japanese(): NullOr<T> {
        return this.#japaneseContainer.original
    }

    //endregion -------------------- Japanese properties --------------------
    //region -------------------- Chinese properties --------------------

    public get originalChinese(): NullOr<ChineseOriginal<T>> {
        return this.#chineseContainer.original
    }

    public get chinese(): NullOr<T> {
        return this.#chineseContainer.get()
    }

    public get traditionalChinese(): NullOr<T> {
        return this.#chineseContainer.get(1)
    }

    public get simplifiedChinese(): NullOr<T> {
        return this.#chineseContainer.get(0)
    }

    //endregion -------------------- Chinese properties --------------------
    //region -------------------- Korean properties --------------------

    public get korean(): NullOr<T> {
        return this.#koreanContainer.original
    }

    //endregion -------------------- Korean properties --------------------
    //region -------------------- Hebrew properties --------------------

    public get isHebrewUsed(): boolean {
        return this.#hebrewContainer.isUsed
    }

    public get hebrew(): NullOr<T> {
        return this.#hebrewContainer.original
    }

    //endregion -------------------- Hebrew properties --------------------
    //region -------------------- Polish properties --------------------

    public get isPolishUsed(): boolean {
        return this.#polishContainer.isUsed
    }

    public get polish(): NullOr<T> {
        return this.#polishContainer.original
    }

    //endregion -------------------- Polish properties --------------------
    //region -------------------- Ukrainian properties --------------------

    public get isUkrainianUsed(): boolean {
        return this.#ukrainianContainer.isUsed
    }

    public get ukrainian(): NullOr<T> {
        return this.#ukrainianContainer.original
    }

    //endregion -------------------- Ukrainian properties --------------------
    //region -------------------- Greek properties --------------------

    public get isGreekUsed(): boolean {
        return this.#greekContainer.isUsed
    }

    public get greek(): NullOr<T> {
        return this.#greekContainer.original
    }

    //endregion -------------------- Greek properties --------------------

    public get originalLanguages(): readonly EveryLanguages[] {
        return this.#originalLanguages
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toNameMap(): ReadonlyMap<EveryLanguages, T> {
        return this.#map ??= new Map(this.originalLanguages.map(language => [language, language.get(this)!,]))
    }

    //endregion -------------------- Convertor methods --------------------

    static #newLanguageContainer<T, S extends T, >(language: OptionalLanguages, originalLanguages: EveryLanguages[], value: S,): EmptyableOptionalLanguage<T, S, never>
    static #newLanguageContainer<T, S extends T, >(language: OptionalLanguages, originalLanguages: EveryLanguages[], value: Nullable<S>,): OptionalLanguage<T, S, never>
    static #newLanguageContainer<T, S extends T, >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: | S,): EmptyableLanguage<T, S, never>
    static #newLanguageContainer<T, S extends T, >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: Nullable<S>,): Language<T, S, never>
    static #newLanguageContainer<T, S extends T, A extends readonly T[], >(language: OptionalLanguages, originalLanguages: EveryLanguages[], value: | S | A,): OptionalLanguage<T, S, A>
    static #newLanguageContainer<T, S extends T, A extends readonly T[], >(language: OptionalLanguages, originalLanguages: EveryLanguages[], value: Nullable<| S | A>,): EmptyableOptionalLanguage<T, S, A>
    static #newLanguageContainer<T, S extends T, A extends readonly T[], >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: Nullable<| S | A>,): Language<T, S, A>
    static #newLanguageContainer<T, S extends T, A extends readonly T[], >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: | S | A,): EmptyableLanguage<T, S, A>
    static #newLanguageContainer<T, >(language: EveryLanguages, originalLanguages: EveryLanguages[], value: Nullable<| T | readonly T[]>,) {
        const languageContainer = (SimpleNameContainer.OPTIONAL_LANGUAGES as readonly EveryLanguages[]).includes(language) ? newOptionalLanguage(value,) : newLanguage(value,)
        const isValueArray = value instanceof Array

        switch (language) {
            case ENGLISH:
            case FRENCH:
            case SPANISH:
            case CHINESE:
            case PORTUGUESE:
                if (isValueArray)
                    originalLanguages.push(...language.children)
                else
                    originalLanguages.push(language)
                break
            case HEBREW:
            case POLISH:
            case UKRAINIAN:
            case GREEK:
                if ((languageContainer as OptionalLanguage<T>).isUsed)
                    originalLanguages.push(language)
                break
            default:
                originalLanguages.push(language)
        }

        return languageContainer
    }

}

type OptionalLanguages = typeof SimpleNameContainer['OPTIONAL_LANGUAGES'][number]
