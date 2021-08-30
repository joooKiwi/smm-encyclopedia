import type {SimpleEnum}       from '../../util/enum/Enum.types';
import type {EntityLimitTypes} from './EntityLimitTypes';

//region -------------------- Number types --------------------

export type EntityLimitTypesOrdinals = | 0 | 1;

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type EntityLimitTypesNames = Uppercase<PossibleEntityLimitTypeEnglishName>;

export type PossibleEntityLimitTypeEnglishName = | 'Playing' | 'Editor';
export type PossibleEntityLimitTypeEnglishCommonText = | 'While playing' | 'In the editor';

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEntityLimitTypes<T = EntityLimitTypes, > = SimpleEnum<EntityLimitTypesNames, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EntityLimitTypesArray<T = EntityLimitTypes, > = readonly [
    SimpleEntityLimitTypes<T>['PLAYING'],
    SimpleEntityLimitTypes<T>['EDITOR'],
];
export type EntityLimitTypeEnglishNameArray = readonly ['Playing', 'Editor',];

//endregion -------------------- Array types --------------------
