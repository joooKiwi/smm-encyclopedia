import type {Array, MutableArray, Nullable, NullOr} from '@joookiwi/type'

import type {Name}                from 'lang/name/Name'
import type {DualValueLanguage}   from 'lang/name/container/DualValueLanguage'
import type {SingleValueLanguage} from 'lang/name/container/SingleValueLanguage'

import {EveryLanguages}   from 'lang/EveryLanguages'
import {ProjectLanguages} from 'lang/ProjectLanguages'
import {EmptyLanguage}    from 'lang/name/container/EmptyLanguage'

import Companion = ProjectLanguages.Companion

/**
 * A {@link Name} container that holds mandatory and optional languages.
 * It can only hold {@link String} values since it is for the translatable values.
 *
 * The mandatory languages are {@link ProjectLanguages.ENGLISH english}
 * and {@link ProjectLanguages.FRENCH french}.
 *
 * And all the optional languages are {@link EveryLanguages.HEBREW hebrew},
 * {@link EveryLanguages.POLISH polish}, {@link EveryLanguages.UKRAINIAN ukrainian}
 * and {@link EveryLanguages.GREEK greek}.
 *
 * @typeParam T The {@link String} type to be applied
 */
export class StringNameContainer<const T extends string = string, >
    implements Name<T> {

    //region -------------------- Fields --------------------

    #originalLanguages?: Array<EveryLanguages>
    #map?: ReadonlyMap<EveryLanguages, T>

    readonly #english
    readonly #french
    readonly #german
    readonly #spanish
    readonly #italian
    readonly #dutch
    readonly #portuguese
    readonly #russian
    readonly #japanese
    readonly #chinese
    readonly #korean
    readonly #hebrew
    readonly #polish
    readonly #ukrainian
    readonly #greek

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(english: | SingleValueLanguage<T> | DualValueLanguage<T, T>,
                       french: | SingleValueLanguage<T> | DualValueLanguage<T, T>,
                       german: Nullable<SingleValueLanguage<T>>,
                       spanish: Nullable<| SingleValueLanguage<T> | DualValueLanguage<T, T>>,
                       italian: Nullable<SingleValueLanguage<T>>,
                       dutch: Nullable<SingleValueLanguage<T>>,
                       portuguese: Nullable<| SingleValueLanguage<T> | DualValueLanguage<T, T>>,
                       russian: Nullable<SingleValueLanguage<T>>,
                       japanese: Nullable<SingleValueLanguage<T>>,
                       chinese: Nullable<| SingleValueLanguage<T> | DualValueLanguage<T, T>>,
                       korean: Nullable<SingleValueLanguage<T>>,
                       hebrew: Nullable<SingleValueLanguage<T>> = null,
                       polish: Nullable<SingleValueLanguage<T>> = null,
                       ukrainian: Nullable<SingleValueLanguage<T>> = null,
                       greek: Nullable<SingleValueLanguage<T>> = null,) {
        this.#english = english
        this.#french = french
        this.#german = german ?? EmptyLanguage.get
        this.#spanish = spanish ?? EmptyLanguage.get
        this.#italian = italian ?? EmptyLanguage.get
        this.#dutch = dutch ?? EmptyLanguage.get
        this.#portuguese = portuguese ?? EmptyLanguage.get
        this.#russian = russian ?? EmptyLanguage.get
        this.#japanese = japanese ?? EmptyLanguage.get
        this.#chinese = chinese ?? EmptyLanguage.get
        this.#korean = korean ?? EmptyLanguage.get
        this.#hebrew = hebrew
        this.#polish = polish
        this.#ukrainian = ukrainian
        this.#greek = greek
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Methods --------------------

    //region -------------------- Language methods --------------------

    public get languageValue(): T { return Companion.current.get(this,) ?? this.english }

    public get originalEnglish(): | T | readonly [T, T,] { return this.#english.all }
    public get english(): T { return this.#english.first }
    public get americanEnglish(): T { return this.#english.first }
    public get europeanEnglish(): T {
        const value = this.#english
        return value.second ?? value.first
    }

    public get originalFrench(): | T | readonly [T, T,] { return this.#french.all }
    public get french(): T { return this.#french.first }
    public get canadianFrench(): T { return this.#french.first }
    public get europeanFrench(): T {
        const value = this.#french
        return value.second ?? value.first
    }

    public get german(): NullOr<T> { return this.#german.first }

    public get originalSpanish(): NullOr<| T | readonly [T, T,]> { return this.#spanish.all }
    public get spanish(): NullOr<T> { return this.#spanish.first }
    public get americanSpanish(): NullOr<T> { return this.#spanish.first }
    public get europeanSpanish(): NullOr<T> { return this.#english.second }

    public get italian(): NullOr<T> { return this.#italian.first }

    public get dutch(): NullOr<T> { return this.#dutch.first }

    public get originalPortuguese(): NullOr<| T | readonly [T, T,]> { return this.#portuguese.all }
    public get portuguese(): NullOr<T> { return this.#portuguese.first }
    public get americanPortuguese(): NullOr<T> { return this.#portuguese.first }
    public get europeanPortuguese(): NullOr<T> { return this.#portuguese.second }

    public get russian(): NullOr<T> { return this.#russian.first }

    public get japanese(): NullOr<T> { return this.#japanese.first }

    public get originalChinese(): NullOr<| T | readonly [T, T,]> { return this.#chinese.all }
    public get chinese(): NullOr<T> { return this.#chinese.first }
    public get traditionalChinese(): NullOr<T> { return this.#chinese.first }
    public get simplifiedChinese(): NullOr<T> { return this.#chinese.second }

    public get korean(): NullOr<T> { return this.#korean.first }

    public get isHebrewUsed(): boolean { return this.#hebrew != null }
    public get hebrew(): NullOr<T> { return this.#hebrew?.first ?? null }

    public get isPolishUsed(): boolean { return this.#polish != null }
    public get polish(): NullOr<T> { return this.#polish?.first ?? null }

    public get isUkrainianUsed(): boolean { return this.#ukrainian != null }
    public get ukrainian(): NullOr<T> { return this.#ukrainian?.first ?? null }

    public get isGreekUsed(): boolean { return this.#greek != null }
    public get greek(): NullOr<T> { return this.#greek?.first ?? null }

    //endregion -------------------- Language methods --------------------

    public get originalLanguages(): Array<EveryLanguages> {
        const value = this.#originalLanguages
        if (value != null)
            return value

        const newValue: MutableArray<EveryLanguages> = []
        if (this.#english.type == 'single')
            newValue.push(EveryLanguages.ENGLISH,)
        else
            newValue.push(EveryLanguages.AMERICAN_ENGLISH, EveryLanguages.EUROPEAN_ENGLISH,)

        if (this.#french.type == 'single')
            newValue.push(EveryLanguages.FRENCH,)
        else
            newValue.push(EveryLanguages.CANADIAN_FRENCH, EveryLanguages.EUROPEAN_FRENCH,)

        const spanish = this.#spanish.type
        if (spanish == 'single')
            newValue.push(EveryLanguages.SPANISH,)
        else if (spanish == 'dual')
            newValue.push(EveryLanguages.AMERICAN_SPANISH, EveryLanguages.EUROPEAN_SPANISH,)

        if (this.#italian.type == 'single')
            newValue.push(EveryLanguages.ITALIAN,)

        if (this.#dutch.type == 'single')
            newValue.push(EveryLanguages.DUTCH,)

        const portuguese = this.#portuguese.type
        if (portuguese == 'single')
            newValue.push(EveryLanguages.PORTUGUESE,)
        else if (portuguese == 'dual')
            newValue.push(EveryLanguages.AMERICAN_PORTUGUESE, EveryLanguages.EUROPEAN_PORTUGUESE,)

        if (this.#russian.type == 'single')
            newValue.push(EveryLanguages.RUSSIAN,)

        if (this.#japanese.type == 'single')
            newValue.push(EveryLanguages.JAPANESE,)

        const chinese = this.#chinese.type
        if (chinese == 'empty')
            throw new EvalError('The chinese language was not expected to be empty',)
        else if (chinese == 'single')
            newValue.push(EveryLanguages.CHINESE,)
        else if (chinese == 'dual')
            newValue.push(EveryLanguages.TRADITIONAL_CHINESE, EveryLanguages.SIMPLIFIED_CHINESE,)

        if (this.#korean.type == 'single')
            newValue.push(EveryLanguages.KOREAN,)

        if (this.#hebrew != null)
            newValue.push(EveryLanguages.HEBREW,)
        if (this.#polish != null)
            newValue.push(EveryLanguages.POLISH,)
        if (this.#ukrainian != null)
            newValue.push(EveryLanguages.UKRAINIAN,)
        if (this.#greek != null)
            newValue.push(EveryLanguages.GREEK,)

        return this.#originalLanguages = newValue
    }

    public toNameMap(): ReadonlyMap<EveryLanguages, T> {
        return this.#map ??= new Map(this.originalLanguages.map(it => [it, it.get<T>(this,),],),)
    }

    //region -------------------- Methods --------------------

}
