import type {Games}                                                                   from 'core/game/Games'
import type {Name}                                                                    from 'lang/name/Name'
import type {IsACompleteNameCallback}                                                 from 'lang/name/Name.builder.types'
import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, ChineseOriginal} from 'lang/name/containers/Language'
import type {Builder}                                                                 from 'util/builder/Builder'

//TODO rename this file to NameBuilderFromTemplate
export interface NameBuilder<T, TEMPLATE, >
    extends Builder<Name<T>> {

    //region -------------------- English getter & setter methods --------------------

    get english(): UndefinedOr<AmericanOrEuropeanOriginal<T>>

    setEnglish(value: AmericanOrEuropeanOriginal<T>,): this

    //endregion -------------------- English getter & setter methods --------------------
    //region -------------------- French getter & setter methods --------------------

    get french(): UndefinedOr<CanadianOrEuropeanOriginal<T>>

    setFrench(value: CanadianOrEuropeanOriginal<T>,): this

    //endregion -------------------- French getter & setter methods --------------------
    //region -------------------- German getter & setter methods --------------------

    get german(): Nullable<T>

    setGerman(value: NullOr<T>,): this

    //endregion -------------------- German getter & setter methods --------------------
    //region -------------------- Spanish getter & setter methods --------------------

    get spanish(): Nullable<AmericanOrEuropeanOriginal<T>>

    setSpanish(value: NullOr<AmericanOrEuropeanOriginal<T>>,): this

    //endregion -------------------- Spanish getter & setter methods --------------------
    //region -------------------- Italian getter & setter methods --------------------

    get italian(): Nullable<T>

    setItalian(value: NullOr<T>,): this

    //endregion -------------------- Italian getter & setter methods --------------------
    //region -------------------- Dutch getter & setter methods --------------------

    get dutch(): Nullable<T>

    setDutch(value: NullOr<T>,): this

    //endregion -------------------- Dutch getter & setter methods --------------------
    //region -------------------- Portuguese getter & setter methods --------------------

    get portuguese(): Nullable<AmericanOrEuropeanOriginal<T>>

    setPortuguese(value: NullOr<AmericanOrEuropeanOriginal<T>>,): this

    //endregion -------------------- Portuguese getter & setter methods --------------------
    //region -------------------- Russian getter & setter methods --------------------

    get russian(): Nullable<T>

    setRussian(value: NullOr<T>,): this

    //endregion -------------------- Russian getter & setter methods --------------------
    //region -------------------- Japanese getter & setter methods --------------------

    get japanese(): Nullable<T>

    setJapanese(value: NullOr<T>,): this

    //endregion -------------------- Japanese getter & setter methods --------------------
    //region -------------------- Chinese getter & setter methods --------------------

    get chinese(): Nullable<ChineseOriginal<T>>

    setChinese(value: NullOr<ChineseOriginal<T>>,): this

    //endregion -------------------- Chinese getter & setter methods --------------------
    //region -------------------- Korean getter & setter methods --------------------

    get korean(): Nullable<T>

    setKorean(value: NullOr<T>,): this

    //endregion -------------------- Korean getter & setter methods --------------------
    //region -------------------- Hebrew getter & setter methods --------------------

    get hebrew(): Nullable<T>

    setHebrew(value: NullOr<T>,): this

    //endregion -------------------- Hebrew getter & setter methods --------------------
    //region -------------------- Polish getter & setter methods --------------------

    get polish(): Nullable<T>

    setPolish(value: NullOr<T>,): this

    //endregion -------------------- Polish getter & setter methods --------------------
    //region -------------------- Ukrainian getter & setter methods --------------------

    get ukrainian(): Nullable<T>

    setUkrainian(value: NullOr<T>,): this

    //endregion -------------------- Ukrainian getter & setter methods --------------------
    //region -------------------- Greek getter & setter methods --------------------

    get greek(): Nullable<T>

    setGreek(value: NullOr<T>,): this

    //endregion -------------------- Greek getter & setter methods --------------------

    get template(): TEMPLATE

    get game(): | readonly [Games,] | readonly [Games, Games,] | readonly [Games, Games, Games,]

    get isACompleteName(): IsACompleteNameCallback

}