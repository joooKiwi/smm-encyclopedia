import type {SimpleEnum}       from '../../util/enum/EnumTypes';
import type {EntityLimitTypes} from './EntityLimitTypes';

export type PossibleEntityLimitTypeEnglishName = | 'Playing' | 'Editor';
export type EntityLimitTypeEnglishNameArray = readonly ['Playing', 'Editor',];

//region -------------------- Enum types --------------------

export type EntityLimitTypesOrdinals = | 0 | 1;
export type EntityLimitTypesNames = | 'PLAYING' | 'EDITOR';
export type SimpleEntityLimitTypes<T = EntityLimitTypes, > = SimpleEnum<EntityLimitTypesNames, T>;
export type EntityLimitTypesArray<T = EntityLimitTypes, > = readonly [
    SimpleEntityLimitTypes<T>['PLAYING'],
    SimpleEntityLimitTypes<T>['EDITOR'],
];

//endregion -------------------- Enum types --------------------