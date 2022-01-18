import type {SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';
import {Versions}                              from './Versions';

export type PossibleNonNullableValue = | Versions | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleName;
export type PossibleValue = | Versions | number | string | null | undefined;

enum Enum {

    V1_20, V1_30, V1_40,
    V_2_0_0, V_3_0_0, SM3DW_V_3_0_0,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type PossibleName = | PossibleName_SMM1 | PossibleName_SMM2;
export type PossibleName_SMM1 = `v1.${| 2 | 3 | 4}0`;
export type PossibleName_SMM2 = | PossibleName_SMM2_Number | 'SM3DW v3.0.0';
export type PossibleName_SMM2_Number = `v${| 2 | 3}.0.0`;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<E extends Versions = Versions, > = OriginalSimpleEnum<Names, E>;

export type EnumByOrdinal<O extends Ordinals = Ordinals, > = EnumArray[O];
export type EnumByNumber<O extends number = number, > = | NonNullable<EnumArray[O]> | null;
export type EnumByName<N extends Names = Names, E extends Versions = Versions, > = SimpleEnum<E>[N];

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<E extends Versions = Versions, > = readonly [
    SimpleEnum<E>['V1_20'], SimpleEnum<E>['V1_30'], SimpleEnum<E>['V1_40'],
    SimpleEnum<E>['V_2_0_0'], SimpleEnum<E>['V_3_0_0'], SimpleEnum<E>['SM3DW_V_3_0_0'],
];

//endregion -------------------- Array types --------------------
