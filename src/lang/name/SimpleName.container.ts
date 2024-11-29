import type {Array, MutableArray, Nullable, NullOr} from '@joookiwi/type'
import {isArray}                                    from '@joookiwi/collection'

import type {EmptyableOptionalLanguage}                                                                                                                         from 'lang/name/containers/EmptyableOptionalLanguage'
import type {EmptyableLanguage}                                                                                                                                 from 'lang/name/containers/EmptyableLanguage'
import type {AmericanOrEuropeanArray, AmericanOrEuropeanOriginal, CanadianOrEuropeanArray, CanadianOrEuropeanOriginal, ChineseArray, ChineseOriginal, Language} from 'lang/name/containers/Language'

import {EveryLanguages}            from 'lang/EveryLanguages'
import {ProjectLanguages}          from 'lang/ProjectLanguages'
import {LanguageContainer}         from 'lang/name/containers/Language.container'
import {OptionalLanguageContainer} from 'lang/name/containers/OptionalLanguage.container'
import {EmptyLanguageContainer}    from 'lang/name/containers/EmptyLanguage.container'

import Companion = ProjectLanguages.Companion

//region -------------------- Import from deconstruction --------------------

const {
    ENGLISH, AMERICAN_ENGLISH, EUROPEAN_ENGLISH,
    FRENCH, CANADIAN_FRENCH, EUROPEAN_FRENCH,
    GERMAN,
    SPANISH, AMERICAN_SPANISH, EUROPEAN_SPANISH,
    ITALIAN,
    DUTCH,
    PORTUGUESE, AMERICAN_PORTUGUESE, EUROPEAN_PORTUGUESE,
    RUSSIAN,
    JAPANESE,
    CHINESE, TRADITIONAL_CHINESE, SIMPLIFIED_CHINESE,
    KOREAN,
    HEBREW, POLISH, UKRAINIAN, GREEK,
} = EveryLanguages

//endregion -------------------- Import from deconstruction --------------------

//TODO make this class the base parent or another one to remove the duplicate code
export class SimpleNameContainer<const T extends NonNullable<unknown>, > {

    //region -------------------- Fields --------------------

    readonly #originalLanguages: Array<EveryLanguages>
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
        const originalLanguages: MutableArray<EveryLanguages> = []

        //region -------------------- English initialization --------------------

        if (isArray(english,))
            originalLanguages.push(AMERICAN_ENGLISH, EUROPEAN_ENGLISH,)
        else
            originalLanguages.push(ENGLISH,)
        this.#englishContainer = new LanguageContainer<T, T, AmericanOrEuropeanArray<T>>(english,)

        //endregion -------------------- English initialization --------------------
        //region -------------------- French initialization --------------------

        if (french == null)
            this.#frenchContainer = EmptyLanguageContainer.get
        else {
            if (isArray(french,))
                originalLanguages.push(CANADIAN_FRENCH, EUROPEAN_FRENCH,)
            else
                originalLanguages.push(FRENCH,)
            this.#frenchContainer = new LanguageContainer<T, T, CanadianOrEuropeanArray<T>>(french,)
        }

        //endregion -------------------- French initialization --------------------
        //region -------------------- German initialization --------------------

        if (german == null)
            this.#germanContainer = EmptyLanguageContainer.get
        else {
            originalLanguages.push(GERMAN,)
            this.#germanContainer = new LanguageContainer<T, T, never>(german,)
        }

        //endregion -------------------- German initialization --------------------
        //region -------------------- Spanish initialization --------------------

        if (spanish == null)
            this.#spanishContainer = EmptyLanguageContainer.get
        else {
            if (isArray(spanish,))
                originalLanguages.push(AMERICAN_SPANISH, EUROPEAN_SPANISH,)
            else
                originalLanguages.push(SPANISH,)
            this.#spanishContainer = new LanguageContainer<T, T, AmericanOrEuropeanArray<T>>(spanish,)
        }

        //endregion -------------------- Spanish initialization --------------------
        //region -------------------- Italian initialization --------------------

        if (italian == null)
            this.#italianContainer = EmptyLanguageContainer.get
        else {
            originalLanguages.push(ITALIAN,)
            this.#italianContainer = new LanguageContainer<T, T, never>(italian,)
        }

        //endregion -------------------- Italian initialization --------------------
        //region -------------------- Dutch initialization --------------------

        if (dutch == null)
            this.#dutchContainer = EmptyLanguageContainer.get
        else {
            originalLanguages.push(DUTCH,)
            this.#dutchContainer = new LanguageContainer<T, T, never>(dutch,)
        }

        //endregion -------------------- Dutch initialization --------------------
        //region -------------------- Portuguese initialization --------------------

        if (portuguese == null)
            this.#portugueseContainer = EmptyLanguageContainer.get
        else {
            if (isArray(portuguese,))
                originalLanguages.push(AMERICAN_PORTUGUESE, EUROPEAN_PORTUGUESE,)
            else
                originalLanguages.push(PORTUGUESE,)
            this.#portugueseContainer = new LanguageContainer<T, T, AmericanOrEuropeanArray<T>>(portuguese,)
        }

        //endregion -------------------- Portuguese initialization --------------------
        //region -------------------- Russian initialization --------------------

        if (russian == null)
            this.#russianContainer = EmptyLanguageContainer.get
        else {
            originalLanguages.push(RUSSIAN,)
            this.#russianContainer = new LanguageContainer<T, T, never>(russian,)
        }

        //endregion -------------------- Russian initialization --------------------
        //region -------------------- Japanese initialization --------------------

        if (japanese == null)
            this.#japaneseContainer = EmptyLanguageContainer.get
        else {
            originalLanguages.push(JAPANESE,)
            this.#japaneseContainer = new LanguageContainer<T, T, never>(japanese,)
        }

        //endregion -------------------- Japanese initialization --------------------
        //region -------------------- Chinese initialization --------------------

        if (chinese == null)
            this.#chineseContainer = EmptyLanguageContainer.get
        else {
            if (isArray(chinese,))
                originalLanguages.push(TRADITIONAL_CHINESE, SIMPLIFIED_CHINESE,)
            else
                originalLanguages.push(CHINESE,)
            this.#chineseContainer = new LanguageContainer<T, T, ChineseArray<T>>(chinese,)
        }

        //endregion -------------------- Chinese initialization --------------------
        //region -------------------- Korean initialization --------------------

        if (korean == null)
            this.#koreanContainer = EmptyLanguageContainer.get
        else {
            originalLanguages.push(KOREAN,)
            this.#koreanContainer = new LanguageContainer<T, T, never>(korean,)
        }

        //endregion -------------------- Korean initialization --------------------
        //region -------------------- Hebrew initialization --------------------

        if (hebrew == null)
            this.#hebrewContainer = EmptyLanguageContainer.get
        else if ((this.#hebrewContainer = new OptionalLanguageContainer<T, T, never>(hebrew,)).isUsed)
            originalLanguages.push(HEBREW,)

        //endregion -------------------- Hebrew initialization --------------------
        //region -------------------- Polish initialization --------------------

        if (polish == null)
            this.#polishContainer = EmptyLanguageContainer.get
        else if ((this.#polishContainer = new OptionalLanguageContainer<T, T, never>(polish,)).isUsed)
            originalLanguages.push(POLISH,)

        //endregion -------------------- Polish initialization --------------------
        //region -------------------- Ukrainian initialization --------------------

        if (ukrainian == null)
            this.#ukrainianContainer = EmptyLanguageContainer.get
        else if ((this.#ukrainianContainer = new OptionalLanguageContainer<T, T, never>(ukrainian,)).isUsed)
            originalLanguages.push(UKRAINIAN,)

        //endregion -------------------- Ukrainian initialization --------------------
        //region -------------------- Greek initialization --------------------

        if (greek == null)
            this.#greekContainer = EmptyLanguageContainer.get
        else if ((this.#greekContainer = new OptionalLanguageContainer<T, T, never>(greek,)).isUsed)
            originalLanguages.push(GREEK,)

        //endregion -------------------- Greek initialization --------------------

        this.#originalLanguages = originalLanguages
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get languageValue(): NonNullable<T> {
        // @ts-ignore: FIXME Support this implementation for the Languages
        return Companion.current.get<T>(this,) ?? this.english
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

    public get originalLanguages(): Array<EveryLanguages> {
        return this.#originalLanguages
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toNameMap(): ReadonlyMap<EveryLanguages, T> {
        return this.#map ??= new Map(this.originalLanguages.map(language => [language, language.get(this)!,]))
    }

    //endregion -------------------- Convertor methods --------------------

}
