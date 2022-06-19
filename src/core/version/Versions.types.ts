import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';
import type {Versions as RealEnum}                                                                                                                                                                                                                         from './Versions';


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleName;
export type PossibleValue = | RealEnum | number | string | null | undefined;

enum Enum {

    SMM_V1_00, SMM_V1_01,
    SMM_V1_10,
    SMM_V1_20, SMM_V1_21,
    SMM_V1_30, SMM_V1_31, SMM_V1_32,
    SMM_V1_40, SMM_V1_41, SMM_V1_42, SMM_V1_43, SMM_V1_44, SMM_V1_45, SMM_V1_46, SMM_V1_47,

    SMM3DS_V1_00, SMM3DS_V1_02, SMM3DS_V1_03, SMM3DS_V1_04, SMM3DS_V1_05,

    SMM2_V1_0_0, SMM2_V1_1_0,
    SMM2_V2_0_0,
    SMM2_V3_0_0, SMM2_SM3DW_V3_0_0, SMM2_V3_0_1,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type PossibleName = | PossibleName_SMM1 | PossibleName_SMM3DS | PossibleName_SMM2;
export type PossibleName_SMM1 = `v1.${| `${| 0 | 1 | 2 | 3 | 4}0` | `${| 0 | 2 | 3 | 4}1` | `${| 3 | 4}2` | `4${| 3 | 4 | 5 | 6 | 7}`}`;
export type PossibleName_SMM3DS = `v1.0${| 0 | 2 | 3 | 4 | 5}`;
export type PossibleName_SMM2 = | PossibleName_SMM2_Number | 'SM3DW v3.0.0';
export type PossibleName_SMM2_Number = `v${`1.${| 0 | 1}.0` | '2.0.0' | `3.0.${| 0 | 1}`}`;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<E extends RealEnum = RealEnum, > = OriginalSimpleEnum<Names, E>;

export type EnumByOrdinal<O extends Ordinals, E extends RealEnum = RealEnum, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number, E extends RealEnum = RealEnum, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends RealEnum = RealEnum, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends RealEnum = RealEnum, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends RealEnum = RealEnum, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<E extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<E>['SMM_V1_00'], SimpleEnum<E>['SMM_V1_01'],
    SimpleEnum<E>['SMM_V1_10'],
    SimpleEnum<E>['SMM_V1_20'], SimpleEnum<E>['SMM_V1_21'],
    SimpleEnum<E>['SMM_V1_30'], SimpleEnum<E>['SMM_V1_31'], SimpleEnum<E>['SMM_V1_32'],
    SimpleEnum<E>['SMM_V1_40'], SimpleEnum<E>['SMM_V1_41'], SimpleEnum<E>['SMM_V1_42'], SimpleEnum<E>['SMM_V1_43'], SimpleEnum<E>['SMM_V1_44'], SimpleEnum<E>['SMM_V1_45'], SimpleEnum<E>['SMM_V1_46'], SimpleEnum<E>['SMM_V1_47'],

    SimpleEnum<E>['SMM3DS_V1_00'], SimpleEnum<E>['SMM3DS_V1_02'], SimpleEnum<E>['SMM3DS_V1_03'], SimpleEnum<E>['SMM3DS_V1_04'], SimpleEnum<E>['SMM3DS_V1_05'],

    SimpleEnum<E>['SMM2_V1_0_0'], SimpleEnum<E>['SMM2_V1_1_0'],
    SimpleEnum<E>['SMM2_V2_0_0'],
    SimpleEnum<E>['SMM2_V3_0_0'], SimpleEnum<E>['SMM2_SM3DW_V3_0_0'], SimpleEnum<E>['SMM2_V3_0_1'],
];

//endregion -------------------- Array types --------------------
