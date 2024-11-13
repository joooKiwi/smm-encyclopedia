import type {Array, NullOr} from '@joookiwi/type'

import type {EveryLanguages}                                                                                                                                    from 'lang/EveryLanguages'
import type {Name}                                                                                                                                              from 'lang/name/Name'
import type {EmptyableOptionalLanguage}                                                                                                                         from 'lang/name/containers/EmptyableOptionalLanguage'
import type {EmptyableLanguage}                                                                                                                                 from 'lang/name/containers/EmptyableLanguage'
import type {AmericanOrEuropeanArray, AmericanOrEuropeanOriginal, CanadianOrEuropeanArray, CanadianOrEuropeanOriginal, ChineseArray, ChineseOriginal, Language} from 'lang/name/containers/Language'

import {ProjectLanguages} from 'lang/ProjectLanguages'

export class NameContainer<const T, >
    implements Name<T> {

    //region -------------------- Fields --------------------

    readonly #originalLanguages
    #map?: Map<EveryLanguages, T>

    readonly #englishContainer
    readonly #frenchContainer
    readonly #germanContainer
    readonly #spanishContainer
    readonly #italianContainer
    readonly #dutchContainer
    readonly #portugueseContainer
    readonly #russianContainer
    readonly #japaneseContainer
    readonly #chineseContainer
    readonly #koreanContainer
    readonly #hebrewContainer
    readonly #polishContainer
    readonly #ukrainianContainer
    readonly #greekContainer

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(originalLanguages: Array<EveryLanguages>,
                       english: Language<T, T, AmericanOrEuropeanArray<T>>,
                       french: Language<T, T, CanadianOrEuropeanArray<T>>,
                       german: EmptyableLanguage<T, T, never>,
                       spanish: EmptyableLanguage<T, T, AmericanOrEuropeanArray<T>>,
                       italian: EmptyableLanguage<T, T, never>,
                       dutch: EmptyableLanguage<T, T, never>,
                       portuguese: EmptyableLanguage<T, T, AmericanOrEuropeanArray<T>>,
                       russian: EmptyableLanguage<T, T, never>,
                       japanese: EmptyableLanguage<T, T, never>,
                       chinese: EmptyableLanguage<T, T, ChineseArray<T>>,
                       korean: EmptyableLanguage<T, T, never>,
                       hebrew: EmptyableOptionalLanguage<T, T, never>,
                       polish: EmptyableOptionalLanguage<T, T, never>,
                       ukrainian: EmptyableOptionalLanguage<T, T, never>,
                       greek: EmptyableOptionalLanguage<T, T, never>,) {
        this.#originalLanguages = originalLanguages
        this.#englishContainer = english
        this.#frenchContainer = french
        this.#germanContainer = german
        this.#spanishContainer = spanish
        this.#italianContainer = italian
        this.#dutchContainer = dutch
        this.#portugueseContainer = portuguese
        this.#russianContainer = russian
        this.#japaneseContainer = japanese
        this.#chineseContainer = chinese
        this.#koreanContainer = korean
        this.#hebrewContainer = hebrew
        this.#polishContainer = polish
        this.#ukrainianContainer = ukrainian
        this.#greekContainer = greek
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Name properties --------------------

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

    public get originalLanguages(): Array<EveryLanguages> {
        return this.#originalLanguages
    }

    //endregion -------------------- Name properties --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toNameMap(): ReadonlyMap<EveryLanguages, T> {
        return this.#map ??= new Map(this.originalLanguages.map(language => [language, language.get(this)!,]))
    }

    //endregion -------------------- Convertor methods --------------------

}
