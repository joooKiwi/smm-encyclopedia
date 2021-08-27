import type {SimpleEnum}       from '../../util/enum/EnumTypes';
import type {EntityCategories} from './EntityCategories';

//region -------------------- Number types --------------------

export type EntityCategoriesOrdinals = | 0 | 1 | 2 | 3;

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type EntityCategoriesNames = |Uppercase<PossibleEntityCategories>;

export type PossibleEntityCategories = | 'Terrain' | 'Item' | 'Enemy' | 'Gizmo';

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEntityCategories<T = EntityCategories, > = SimpleEnum<EntityCategoriesNames, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EntityCategoriesArray<T = EntityCategories, > = readonly [
    SimpleEntityCategories<T>['TERRAIN'],
    SimpleEntityCategories<T>['ITEM'],
    SimpleEntityCategories<T>['ENEMY'],
    SimpleEntityCategories<T>['GIZMO'],
];

//endregion -------------------- Array types --------------------
