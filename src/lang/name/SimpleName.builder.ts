import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal} from 'lang/name/containers/Language'
import type {Builder}                                                                 from 'util/builder/Builder'

import {SimpleNameContainer} from 'lang/name/SimpleName.container'
import {assert}              from 'util/utilitiesMethods'

/** @deprecated Use the class directly or a child name instead */
export class SimpleNameBuilder<const out T extends NonNullable<unknown>, >
    implements Builder<SimpleNameContainer<T>> {

    //region -------------------- Fields --------------------

    #english?: NullOr<AmericanOrEuropeanOriginal<T>>
    #french?: NullOr<CanadianOrEuropeanOriginal<T>>
    #german?: NullOr<T>
    #spanish?: NullOr<AmericanOrEuropeanOriginal<T>>
    #italian?: NullOr<T>
    #dutch?: NullOr<T>
    #portuguese?: NullOr<AmericanOrEuropeanOriginal<T>>
    #russian?: NullOr<T>
    #japanese?: NullOr<T>
    #chinese?: NullOr<ChineseOriginal<T>>
    #korean?: NullOr<T>
    #hebrew?: NullOr<T>
    #polish?: NullOr<T>
    #ukrainian?: NullOr<T>
    #greek?: NullOr<T>

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter & setter methods --------------------

    //region -------------------- English getter & setter methods --------------------

    public get english(): NullOr<AmericanOrEuropeanOriginal<T>> {
        return this.#english ?? null
    }

    public setEnglish(value: Nullable<AmericanOrEuropeanOriginal<T>>,): this {
        this.#english = value ?? null
        return this
    }

    //endregion -------------------- English getter & setter methods --------------------
    //region -------------------- French getter & setter methods --------------------

    public get french(): NullOr<CanadianOrEuropeanOriginal<T>> {
        return this.#french ?? null
    }

    public setFrench(value: Nullable<CanadianOrEuropeanOriginal<T>>,): this {
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

    public get spanish(): NullOr<AmericanOrEuropeanOriginal<T>> {
        return this.#spanish ?? null
    }

    public setSpanish(value: Nullable<AmericanOrEuropeanOriginal<T>>,): this {
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

    public get portuguese(): NullOr<AmericanOrEuropeanOriginal<T>> {
        return this.#portuguese ?? null
    }

    public setPortuguese(value: Nullable<AmericanOrEuropeanOriginal<T>>,): this {
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

    public get chinese(): NullOr<ChineseOriginal<T>> {
        return this.#chinese ?? null
    }

    public setChinese(value: Nullable<ChineseOriginal<T>>,): this {
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
    //region -------------------- Hebrew getter & setter methods --------------------

    public get hebrew(): NullOr<T> {
        return this.#hebrew ?? null
    }

    public setHebrew(value: Nullable<T>,): this {
        this.#hebrew = value ?? null
        return this
    }

    //endregion -------------------- Hebrew getter & setter methods --------------------
    //region -------------------- Polish getter & setter methods --------------------

    public get polish(): NullOr<T> {
        return this.#polish ?? null
    }

    public setPolish(value: Nullable<T>,): this {
        this.#polish = value ?? null
        return this
    }

    //endregion -------------------- Polish getter & setter methods --------------------
    //region -------------------- Ukrainian getter & setter methods --------------------

    public get ukrainian(): NullOr<T> {
        return this.#ukrainian ?? null
    }

    public setUkrainian(value: Nullable<T>,): this {
        this.#ukrainian = value ?? null
        return this
    }

    //endregion -------------------- Ukrainian getter & setter methods --------------------
    //region -------------------- Greek getter & setter methods --------------------

    public get greek(): NullOr<T> {
        return this.#greek ?? null
    }

    public setGreek(value: Nullable<T>,): this {
        this.#greek = value ?? null
        return this
    }

    //endregion -------------------- Greek getter & setter methods --------------------

    //endregion -------------------- Getter & setter methods --------------------

    public build(): SimpleNameContainer<T> {
        const {english,} = this
        assert(english != null, 'The english reference has not been initialized.',)

        return new SimpleNameContainer(
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
            this.hebrew,
            this.polish,
            this.ukrainian,
            this.greek,
        )
    }
}
