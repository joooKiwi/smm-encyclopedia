import type {SimpleEnum}       from '../../util/enum/EnumTypes';
import type {EntityCategories} from './EntityCategories';

export type PossibleEntityCategories = | 'Terrain' | 'Item' | 'Enemy' | 'Gizmo';

//region -------------------- Enum types --------------------

export type EntityCategoriesOrdinals = | 0 | 1 | 2 | 3;
export type EntityCategoriesNames = | 'TERRAIN' | 'ITEM' | 'ENEMY' | 'GIZMO';
export type SimpleEntityCategories<T = EntityCategories, > = SimpleEnum<EntityCategoriesNames, T>;
export type EntityCategoriesArray<T = EntityCategories, > = readonly [
    SimpleEntityCategories<T>['TERRAIN'],
    SimpleEntityCategories<T>['ITEM'],
    SimpleEntityCategories<T>['ENEMY'],
    SimpleEntityCategories<T>['GIZMO'],
];

//endregion -------------------- Enum types --------------------