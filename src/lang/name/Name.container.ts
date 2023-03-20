import type {Name}                                                                                                                                              from 'lang/name/Name'
import type {EmptyableOptionalLanguage}                                                                                                                         from 'lang/name/containers/EmptyableOptionalLanguage'
import type {EmptyableLanguage}                                                                                                                                 from 'lang/name/containers/EmptyableLanguage'
import type {AmericanOrEuropeanArray, AmericanOrEuropeanOriginal, CanadianOrEuropeanArray, CanadianOrEuropeanOriginal, ChineseArray, ChineseOriginal, Language} from 'lang/name/containers/Language'
import type {OptionalLanguage}                                                                                                                                  from 'lang/name/containers/OptionalLanguage'
import type {Nullable, NullOr}                                                                                                                                  from 'util/types/nullable'

import {EveryLanguages}            from 'lang/EveryLanguages'
import {ProjectLanguages}          from 'lang/ProjectLanguages'
import {EmptyLanguageContainer}    from 'lang/name/containers/EmptyLanguage.container'
import {LanguageContainer}         from 'lang/name/containers/Language.container'
import {OptionalLanguageContainer} from 'lang/name/containers/OptionalLanguage.container'
import {assert}                    from 'util/utilitiesMethods'

//region -------------------- Import from deconstruction --------------------

const {ENGLISH, FRENCH, GERMAN, SPANISH, ITALIAN, DUTCH, PORTUGUESE, RUSSIAN, JAPANESE, CHINESE, KOREAN, HEBREW, POLISH, UKRAINIAN, GREEK,} = EveryLanguages

//endregion -------------------- Import from deconstruction --------------------

export class NameContainer<T, >
    implements Name<T> {

    //region -------------------- Fields --------------------

    static readonly #OPTIONAL_LANGUAGES = [HEBREW, POLISH, UKRAINIAN, GREEK,] as const

    readonly #originalLanguages: readonly EveryLanguages[]
    #map?: Map<EveryLanguages, T>

    readonly #englishContainer: Language<T, T, AmericanOrEuropeanArray<T>>
    readonly #frenchContainer: Language<T, T, CanadianOrEuropeanArray<T>>
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

    public constructor(english: AmericanOrEuropeanOriginal<T>,
                       french: CanadianOrEuropeanOriginal<T>,
                       german: NullOr<T>,
                       spanish: NullOr<AmericanOrEuropeanOriginal<T>>,
                       italian: NullOr<T>,
                       dutch: NullOr<T>,
                       portuguese: NullOr<AmericanOrEuropeanOriginal<T>>,
                       russian: NullOr<T>,
                       japanese: NullOr<T>,
                       chinese: NullOr<ChineseOriginal<T>>,
                       korean: NullOr<T>,
                       hebrew: NullOr<T>,
                       polish: NullOr<T>,
                       ukrainian: NullOr<T>,
                       greek: NullOr<T>,) {
        const originalLanguages: EveryLanguages[] = []

        this.#englishContainer = NameContainer.#newLanguageContainer<T, T, AmericanOrEuropeanArray<T>>(ENGLISH, originalLanguages, english,)
        this.#frenchContainer = NameContainer.#newLanguageContainer<T, T, CanadianOrEuropeanArray<T>>(FRENCH, originalLanguages, french,)
        this.#germanContainer = NameContainer.#newLanguageContainer<T, T>(GERMAN, originalLanguages, german,)
        this.#spanishContainer = NameContainer.#newLanguageContainer<T, T, AmericanOrEuropeanArray<T>>(SPANISH, originalLanguages, spanish,)
        this.#italianContainer = NameContainer.#newLanguageContainer<T, T>(ITALIAN, originalLanguages, italian,)
        this.#dutchContainer = NameContainer.#newLanguageContainer<T, T>(DUTCH, originalLanguages, dutch,)
        this.#portugueseContainer = NameContainer.#newLanguageContainer<T, T, AmericanOrEuropeanArray<T>>(PORTUGUESE, originalLanguages, portuguese,)
        this.#russianContainer = NameContainer.#newLanguageContainer<T, T>(RUSSIAN, originalLanguages, russian,)
        this.#japaneseContainer = NameContainer.#newLanguageContainer<T, T>(JAPANESE, originalLanguages, japanese,)
        this.#chineseContainer = NameContainer.#newLanguageContainer<T, T, ChineseArray<T>>(CHINESE, originalLanguages, chinese,)
        this.#koreanContainer = NameContainer.#newLanguageContainer<T, T>(KOREAN, originalLanguages, korean,)
        this.#hebrewContainer = NameContainer.#newLanguageContainer<T, T>(HEBREW, originalLanguages, hebrew,)
        this.#polishContainer = NameContainer.#newLanguageContainer<T, T>(POLISH, originalLanguages, polish,)
        this.#ukrainianContainer = NameContainer.#newLanguageContainer<T, T>(UKRAINIAN, originalLanguages, ukrainian,)
        this.#greekContainer = NameContainer.#newLanguageContainer<T, T>(GREEK, originalLanguages, greek,)

        this.#originalLanguages = originalLanguages
    }

    //region -------------------- Getter methods --------------------

    //region -------------------- Name properties --------------------

    /**
     * The optional languages on the {@link Name} used in the project:
     * <ol>
     *  <li>{@link EveryLanguages.HEBREW}</li>
     *  <li>{@link EveryLanguages.POLISH}</li>
     *  <li>{@link EveryLanguages.UKRAINIAN}</li>
     *  <li>{@link EveryLanguages.GREEK}</li>
     * </ol>
     *
     * @see ProjectLanguages.isInEverySuperMarioMakerGame
     */
    public static get optionalLanguages(): readonly [EveryLanguages, EveryLanguages, EveryLanguages, EveryLanguages,] {
        return this._optionalLanguages
    }

    /**
     * The options languages on the {@link NameContainer},
     * but as the type used by the private static fields.
     */
    protected static get _optionalLanguages(): OptionalLanguagesArray {
        return this.#OPTIONAL_LANGUAGES
    }

    public get languageValue(): T {
        return ProjectLanguages.current.get<T>(this)
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

    public get originalFrench(): CanadianOrEuropeanOriginal<T> {
        return this.#frenchContainer.original
    }

    public get french(): T {
        return this.#frenchContainer.get()
    }

    public get canadianFrench(): T {
        return this.#frenchContainer.get(0)
    }

    public get europeanFrench(): T {
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

    //endregion -------------------- Name properties --------------------
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
        if (value == null) {
            assert(!language.isACompleteLanguage, `The language "${language.englishName}" cannot be null if it is a complete language.`,)
            return EmptyLanguageContainer.get
        }

        const languageContainer = this.optionalLanguages.includes(language) ? OptionalLanguageContainer.newInstance(value) : LanguageContainer.newInstance(value)
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

type OptionalLanguages = typeof NameContainer['optionalLanguages'][number]
type OptionalLanguagesArray = readonly [typeof EveryLanguages['HEBREW'], typeof EveryLanguages['POLISH'], typeof EveryLanguages['UKRAINIAN'], typeof EveryLanguages['GREEK'],]
