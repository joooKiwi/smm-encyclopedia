import type {AmericanOrEuropeanOriginal, CanadianOrEuropeanOriginal, PossibleAmericanOrEuropeanValue, PossibleChineseValue} from './containers/Language'
import type {Builder}                                                                                                       from '../../util/builder/Builder'
import type {EnumArray as GameArray}                                                                                        from '../../core/game/Games.types'
import type {Games}                                                                                                         from '../../core/game/Games'
import type {IsACompleteNameCallback}                                                                                       from './Name.builder.types'
import type {Name}                                                                                                          from './Name'
import type {PossibleLanguageValue}                                                                                         from '../ClassWithOnlyProjectLanguages'

export interface NameBuilder<T, TEMPLATE, >
    extends Builder<Name<T>> {

    //region -------------------- English getter & setter methods --------------------

    get english(): | AmericanOrEuropeanOriginal<T> | undefined

    setEnglish(value: AmericanOrEuropeanOriginal<T>,): this

    //endregion -------------------- English getter & setter methods --------------------
    //region -------------------- French getter & setter methods --------------------

    get french(): | CanadianOrEuropeanOriginal<T> | undefined

    setFrench(value: CanadianOrEuropeanOriginal<T>,): this

    //endregion -------------------- French getter & setter methods --------------------
    //region -------------------- German getter & setter methods --------------------

    get german(): | PossibleLanguageValue<T> | undefined

    setGerman(value: PossibleLanguageValue<T>,): this

    //endregion -------------------- German getter & setter methods --------------------
    //region -------------------- Spanish getter & setter methods --------------------

    get spanish(): | PossibleAmericanOrEuropeanValue<T> | undefined

    setSpanish(value: PossibleAmericanOrEuropeanValue<T>,): this

    //endregion -------------------- Spanish getter & setter methods --------------------
    //region -------------------- Italian getter & setter methods --------------------

    get italian(): | PossibleLanguageValue<T> | undefined

    setItalian(value: PossibleLanguageValue<T>,): this

    //endregion -------------------- Italian getter & setter methods --------------------
    //region -------------------- Dutch getter & setter methods --------------------

    get dutch(): | PossibleLanguageValue<T> | undefined

    setDutch(value: PossibleLanguageValue<T>,): this

    //endregion -------------------- Dutch getter & setter methods --------------------
    //region -------------------- Portuguese getter & setter methods --------------------

    get portuguese(): | PossibleAmericanOrEuropeanValue<T> | undefined

    setPortuguese(value: PossibleAmericanOrEuropeanValue<T>,): this

    //endregion -------------------- Portuguese getter & setter methods --------------------
    //region -------------------- Russian getter & setter methods --------------------

    get russian(): | PossibleLanguageValue<T> | undefined

    setRussian(value: PossibleLanguageValue<T>,): this

    //endregion -------------------- Russian getter & setter methods --------------------
    //region -------------------- Japanese getter & setter methods --------------------

    get japanese(): | PossibleLanguageValue<T> | undefined

    setJapanese(value: PossibleLanguageValue<T>,): this

    //endregion -------------------- Japanese getter & setter methods --------------------
    //region -------------------- Chinese getter & setter methods --------------------

    get chinese(): | PossibleChineseValue<T> | undefined

    setChinese(value: PossibleChineseValue<T>,): this

    //endregion -------------------- Chinese getter & setter methods --------------------
    //region -------------------- Korean getter & setter methods --------------------

    get korean(): | PossibleLanguageValue<T> | undefined

    setKorean(value: PossibleLanguageValue<T>,): this

    //endregion -------------------- Korean getter & setter methods --------------------
    //region -------------------- Hebrew getter & setter methods --------------------

    get hebrew(): | PossibleLanguageValue<T> | undefined

    setHebrew(value: PossibleLanguageValue<T>,): this

    //endregion -------------------- Hebrew getter & setter methods --------------------
    //region -------------------- Polish getter & setter methods --------------------

    get polish(): | PossibleLanguageValue<T> | undefined

    setPolish(value: PossibleLanguageValue<T>,): this

    //endregion -------------------- Polish getter & setter methods --------------------
    //region -------------------- Ukrainian getter & setter methods --------------------

    get ukrainian(): | PossibleLanguageValue<T> | undefined

    setUkrainian(value: PossibleLanguageValue<T>,): this

    //endregion -------------------- Ukrainian getter & setter methods --------------------
    //region -------------------- Greek getter & setter methods --------------------

    get greek(): | PossibleLanguageValue<T> | undefined

    setGreek(value: PossibleLanguageValue<T>,): this

    //endregion -------------------- Greek getter & setter methods --------------------

    get template(): TEMPLATE

    get game(): | Games | readonly [Games, Games,] | GameArray

    get isACompleteName(): IsACompleteNameCallback

}