import type {Array, MutableArray, Nullable, NullOr} from '@joookiwi/type'

import type {Name} from 'lang/name/Name'

import {EveryLanguages}   from 'lang/EveryLanguages'
import {ProjectLanguages} from 'lang/ProjectLanguages'

import Companion = ProjectLanguages.Companion

/**
 * A {@link Name} container that holds only a single value per language.
 * The region does not matter since it only contains the language itself.
 *
 * It does not contain all the optional languages ({@link EveryLanguages.HEBREW hebrew},
 * {@link EveryLanguages.POLISH polish}, {@link EveryLanguages.UKRAINIAN ukrainian}
 * and {@link EveryLanguages.GREEK greek})
 * since only the languages being present in {@link ProjectLanguages} are being applied.
 *
 * And the only mandatory language is {@link ProjectLanguages.ENGLISH english}
 * since the whole website is based upon English.
 *
 * @typeParam T The non-null type to be applied
 * @see UniqueValueNameBuilder
 */
export class UniqueValueNameContainer<const T extends NonNullable<unknown>, >
    implements Name<NullOr<T>> {

    //region -------------------- Fields --------------------

    #originalLanguages?: Array<EveryLanguages>
    #map?: Map<EveryLanguages, T>

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

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(english: T,
                       french: Nullable<T>,
                       german: Nullable<T>,
                       spanish: Nullable<T>,
                       italian: Nullable<T>,
                       dutch: Nullable<T>,
                       portuguese: Nullable<T>,
                       russian: Nullable<T>,
                       japanese: Nullable<T>,
                       chinese: Nullable<T>,
                       korean: Nullable<T>,) {
        this.#english = english
        this.#french = french ?? null
        this.#german = german ?? null
        this.#spanish = spanish ?? null
        this.#italian = italian ?? null
        this.#dutch = dutch ?? null
        this.#portuguese = portuguese ?? null
        this.#russian = russian ?? null
        this.#japanese = japanese ?? null
        this.#chinese = chinese ?? null
        this.#korean = korean ?? null
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Methods --------------------

    //region -------------------- Language methods --------------------

    public get languageValue(): T { return Companion.current.get(this,) ?? this.english }

    public get originalEnglish(): T { return this.#english }
    public get english(): T { return this.#english }
    public get americanEnglish(): T { return this.#english }
    public get europeanEnglish(): T { return this.#english }

    public get originalFrench(): NullOr<T> { return this.#french }
    public get french(): NullOr<T> { return this.#french }
    public get canadianFrench(): NullOr<T> { return this.#french }
    public get europeanFrench(): NullOr<T> { return this.#french }

    public get german(): NullOr<T> { return this.#german }

    public get originalSpanish(): NullOr<T> { return this.#spanish }
    public get spanish(): NullOr<T> { return this.#spanish }
    public get americanSpanish(): NullOr<T> { return this.#spanish }
    public get europeanSpanish(): NullOr<T> { return this.#spanish }

    public get italian(): NullOr<T> { return this.#italian }

    public get dutch(): NullOr<T> { return this.#dutch }

    public get originalPortuguese(): NullOr<T> { return this.#portuguese }
    public get portuguese(): NullOr<T> { return this.#portuguese }
    public get americanPortuguese(): NullOr<T> { return this.#portuguese }
    public get europeanPortuguese(): NullOr<T> { return this.#portuguese }

    public get russian(): NullOr<T> { return this.#russian }

    public get japanese(): NullOr<T> { return this.#japanese }

    public get originalChinese(): NullOr<T> { return this.#chinese }
    public get chinese(): NullOr<T> { return this.#chinese }
    public get traditionalChinese(): NullOr<T> { return this.#chinese }
    public get simplifiedChinese(): NullOr<T> { return this.#chinese }

    public get korean(): NullOr<T> { return this.#korean }

    public get isHebrewUsed(): false { return false }
    public get hebrew(): null { return null }

    public get isPolishUsed(): false { return false }
    public get polish(): null { return null }

    public get isUkrainianUsed(): false { return false }
    public get ukrainian(): null { return null }

    public get isGreekUsed(): false { return false }
    public get greek(): null { return null }

    //endregion -------------------- Language methods --------------------

    public get originalLanguages(): Array<EveryLanguages> {
        const value = this.#originalLanguages
        if (value != null)
            return value

        const newValue: MutableArray<EveryLanguages> = []
        if (this.#english != null)
            newValue.push(EveryLanguages.ENGLISH,)
        if (this.#french != null)
            newValue.push(EveryLanguages.FRENCH,)
        if (this.#spanish != null)
            newValue.push(EveryLanguages.SPANISH,)
        if (this.#italian != null)
            newValue.push(EveryLanguages.ITALIAN,)
        if (this.#dutch != null)
            newValue.push(EveryLanguages.DUTCH,)
        if (this.#portuguese != null)
            newValue.push(EveryLanguages.PORTUGUESE,)
        if (this.#russian != null)
            newValue.push(EveryLanguages.RUSSIAN,)
        if (this.#japanese != null)
            newValue.push(EveryLanguages.JAPANESE,)
        if (this.#chinese != null)
            newValue.push(EveryLanguages.CHINESE,)
        if (this.#korean != null)
            newValue.push(EveryLanguages.KOREAN,)

        return this.#originalLanguages = newValue
    }

    public toNameMap(): ReadonlyMap<EveryLanguages, T> {
        return this.#map ??= new Map(this.originalLanguages.map(language => [language, language.get(this)!,]))
    }

    //endregion -------------------- Methods --------------------

}
