import type {Nullable, NullOr} from '@joookiwi/type'

import type {Builder} from 'util/builder/Builder'

import {UniqueValueNameContainer} from 'lang/name/UniqueValueName.container'
import {assert}                   from 'util/utilitiesMethods'

/**
 * A {@link Builder} class that will eventually create a {@link UniqueValueNameContainer}
 *
 * @typeParam T The non-null type to be applied
 * @see UniqueValueNameContainer
 */
export class UniqueValueNameBuilder<const T extends NonNullable<unknown>, >
    implements Builder<UniqueValueNameContainer<T>> {

    //region -------------------- Fields --------------------

    #english?: NullOr<T>
    #french?: NullOr<T>
    #german?: NullOr<T>
    #spanish?: NullOr<T>
    #italian?: NullOr<T>
    #dutch?: NullOr<T>
    #portuguese?: NullOr<T>
    #russian?: NullOr<T>
    #japanese?: NullOr<T>
    #chinese?: NullOr<T>
    #korean?: NullOr<T>

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter & setter methods --------------------

    //region -------------------- English getter & setter methods --------------------

    public get english(): NullOr<T> {
        return this.#english ?? null
    }

    public setEnglish(value: Nullable<T>,): this {
        this.#english = value ?? null
        return this
    }

    //endregion -------------------- English getter & setter methods --------------------
    //region -------------------- French getter & setter methods --------------------

    public get french(): NullOr<T> {
        return this.#french ?? null
    }

    public setFrench(value: Nullable<T>,): this {
        this.#french = value ?? null
        return this
    }

    //endregion -------------------- French getter & setter methods --------------------
    //region -------------------- German getter & setter methods --------------------

    public get german(): NullOr<T> {
        return this.#german ?? null
    }

    public setGerman(value: Nullable<T>,): this {
        this.#german = value ?? null
        return this
    }

    //endregion -------------------- German getter & setter methods --------------------
    //region -------------------- Spanish getter & setter methods --------------------

    public get spanish(): NullOr<T> {
        return this.#spanish ?? null
    }

    public setSpanish(value: Nullable<T>,): this {
        this.#spanish = value ?? null
        return this
    }

    //endregion -------------------- Spanish getter & setter methods --------------------
    //region -------------------- Italian getter & setter methods --------------------

    public get italian(): NullOr<T> {
        return this.#italian ?? null
    }

    public setItalian(value: Nullable<T>,): this {
        this.#italian = value ?? null
        return this
    }

    //endregion -------------------- Italian getter & setter methods --------------------
    //region -------------------- Dutch getter & setter methods --------------------

    public get dutch(): NullOr<T> {
        return this.#dutch ?? null
    }

    public setDutch(value: Nullable<T>,): this {
        this.#dutch = value ?? null
        return this
    }

    //endregion -------------------- Dutch getter & setter methods --------------------
    //region -------------------- Portuguese getter & setter methods --------------------

    public get portuguese(): NullOr<T> {
        return this.#portuguese ?? null
    }

    public setPortuguese(value: Nullable<T>,): this {
        this.#portuguese = value ?? null
        return this
    }

    //endregion -------------------- Portuguese getter & setter methods --------------------
    //region -------------------- Russian getter & setter methods --------------------

    public get russian(): NullOr<T> {
        return this.#russian ?? null
    }

    public setRussian(value: Nullable<T>,): this {
        this.#russian = value ?? null
        return this
    }

    //endregion -------------------- Russian getter & setter methods --------------------
    //region -------------------- Japanese getter & setter methods --------------------

    public get japanese(): NullOr<T> {
        return this.#japanese ?? null
    }

    public setJapanese(value: Nullable<T>,): this {
        this.#japanese = value ?? null
        return this
    }

    //endregion -------------------- Japanese getter & setter methods --------------------
    //region -------------------- Chinese getter & setter methods --------------------

    public get chinese(): NullOr<T> {
        return this.#chinese ?? null
    }

    public setChinese(value: Nullable<T>,): this {
        this.#chinese = value ?? null
        return this
    }

    //endregion -------------------- Chinese getter & setter methods --------------------
    //region -------------------- Korean getter & setter methods --------------------

    public get korean(): NullOr<T> {
        return this.#korean ?? null
    }

    public setKorean(value: Nullable<T>,): this {
        this.#korean = value ?? null
        return this
    }

    //endregion -------------------- Korean getter & setter methods --------------------

    //endregion -------------------- Getter & setter methods --------------------

    public build(): UniqueValueNameContainer<T> {
        const {english,} = this
        assert(english != null, 'The english reference has not been initialized.',)

        return new UniqueValueNameContainer(
            english,
            this.french,
            this.german,
            this.spanish,
            this.italian,
            this.dutch,
            this.portuguese,
            this.russian,
            this.japanese,
            this.chinese,
            this.korean,
        )
    }
}
