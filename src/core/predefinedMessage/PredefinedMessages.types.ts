import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types'
import type {PredefinedMessages as RealEnum}                                                                                                                                                                                                               from './PredefinedMessages'


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue
export type PossibleStringValue = | Names | PossibleEnglishName
export type PossibleValue = | RealEnum | string | number | null | undefined

enum Enum {

    THANKS, HERE_WE_GO, NICE_WORK,
    IM_DONE_FOR, SORRY, NO_WORRIES,
    NICE, HOW, GOTCHA,
    SO_TOUGH, OOPS, WAHOO,
    OH_NO, WE_VE_GOT_THIS, TEAMWORK,
    FOLLOW_ME, HELP, RUN_FOR_IT,
    JUUUUUMP, HOP_ON, THROW,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names]

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum

//region -------------------- English name --------------------

export type PossibleEnglishName =
    | 'Thanks!' | 'Here we go!' | 'Nice work.'
    | 'I\'m done for...' | 'Sorry!' | 'No worries!'
    | 'Nice!' | 'How?!' | 'Gotcha.'
    | 'So tough!' | 'OOPS!' | 'WAHOO!'
    | 'Oh no...' | 'We\'ve got this.' | 'Teamwork!'
    | 'Follow me.' | 'HELP!' | 'Run for it!'
    | 'Juuuuump!' | 'Hop on!' | 'Throw!'

//endregion -------------------- English name --------------------

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<E extends RealEnum = RealEnum, > = OriginalSimpleEnum<Names, E>

export type EnumByOrdinal<O extends Ordinals, E extends RealEnum = RealEnum, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>
export type EnumByNumber<O extends number, E extends RealEnum = RealEnum, > = OriginalEnumByNumber<EnumArray<E>, O>

export type EnumByName<N extends Names, E extends RealEnum = RealEnum, > = OriginalEnumByName<N, E>
export type EnumByPossibleString<S extends PossibleStringValue, E extends RealEnum = RealEnum, > = OriginalEnumByPossibleString<S, Names, E>
export type EnumByString<S extends string, E extends RealEnum = RealEnum, > = OriginalEnumByString<S, PossibleStringValue, Names, E>

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['THANKS'], SimpleEnum<T>['HERE_WE_GO'], SimpleEnum<T>['NICE_WORK'],
    SimpleEnum<T>['IM_DONE_FOR'], SimpleEnum<T>['SORRY'], SimpleEnum<T>['NO_WORRIES'],
    SimpleEnum<T>['NICE'], SimpleEnum<T>['HOW'], SimpleEnum<T>['GOTCHA'],
    SimpleEnum<T>['SO_TOUGH'], SimpleEnum<T>['OOPS'], SimpleEnum<T>['WAHOO'],
    SimpleEnum<T>['OH_NO'], SimpleEnum<T>['WE_VE_GOT_THIS'], SimpleEnum<T>['TEAMWORK'],
    SimpleEnum<T>['FOLLOW_ME'], SimpleEnum<T>['HELP'], SimpleEnum<T>['RUN_FOR_IT'],
    SimpleEnum<T>['JUUUUUMP'], SimpleEnum<T>['HOP_ON'], SimpleEnum<T>['THROW'],
]

//endregion -------------------- Array types --------------------