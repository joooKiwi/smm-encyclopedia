import type {HeaderTypes}                      from './HeaderTypes';
import type {SimpleEnum as OriginalSimpleEnum} from '../../../../util/enum/Enum.types';

export type PossibleNonNullableValue = | HeaderTypes | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleName;
export type PossibleValue = | HeaderTypes | number | string | null | undefined;

enum Enum {
    HEAD,
    FOOT,
}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type PossibleName = Lowercase<Names>;
export type PossiblePlacement = | 'top' | 'bottom';

//region -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<E extends HeaderTypes = HeaderTypes, > = OriginalSimpleEnum<Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends HeaderTypes = HeaderTypes, > = readonly [
    SimpleEnum<T>['HEAD'], SimpleEnum<T>['FOOT'],
];

//endregion -------------------- Array types --------------------
