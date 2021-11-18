import type {EntityCategories}                 from './EntityCategories';
import type {SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';

export type PossibleNonNullableValue = | EntityCategories | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName;
export type PossibleValue = EntityCategories | number | string | null | undefined;

enum Enum {

    TERRAIN,
    ITEM,
    ENEMY,
    GIZMO,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names]

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type PossibleEnglishName = | 'Terrain' | 'Item' | 'Enemy' | 'Gizmo';

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends EntityCategories = EntityCategories, > = OriginalSimpleEnum<Names, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends EntityCategories = EntityCategories, > = readonly [
    SimpleEnum<T>['TERRAIN'],
    SimpleEnum<T>['ITEM'],
    SimpleEnum<T>['ENEMY'],
    SimpleEnum<T>['GIZMO'],
];

//endregion -------------------- Array types --------------------
