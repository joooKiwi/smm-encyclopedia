import type {EntityLimitTypes}                 from './EntityLimitTypes';
import type {SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';

export type PossibleNonNullableValue = | EntityLimitTypes | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName | PossibleEnglishCommonText;
export type PossibleValue = | EntityLimitTypes | number | string | null | undefined;

enum Enum {

    WHILE_PLAYING,
    EDITOR,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type PossibleEnglishName = | 'While Playing' | 'Editor';
export type PossibleEnglishCommonText = | 'While playing' | 'In the editor';

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends EntityLimitTypes = EntityLimitTypes, > = OriginalSimpleEnum<Names, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends EntityLimitTypes = EntityLimitTypes, > = readonly [
    SimpleEnum<T>['WHILE_PLAYING'],
    SimpleEnum<T>['EDITOR'],
];
export type EnumArray_EnglishName = readonly ['While Playing', 'Editor',];

//endregion -------------------- Array types --------------------
