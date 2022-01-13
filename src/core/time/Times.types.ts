import type {SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';
import type {Times}                            from './Times';

export type PossibleNonNullableValue = | Times | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName;
export type PossibleValue = | Times | number | string | null | undefined;

enum Enum {

    DAY,
    NIGHT,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type PossibleEnglishName = | 'Day' | 'Night';

export type PossibleSimpleImagePath = | 'Sun' | 'Moon';
export type PossibleImagePath = `/time/${PossibleSimpleImagePath}.png`;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends Times = Times, > = OriginalSimpleEnum<Names, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends Times = Times, > = readonly [
    SimpleEnum<T>['DAY'],
    SimpleEnum<T>['NIGHT'],
];

//endregion -------------------- Array types --------------------
