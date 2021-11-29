import type {SimpleEnum as OriginalSimpleEnum} from '../../../util/enum/Enum.types';
import type {SoundEffectCategories}            from './SoundEffectCategories';

export type PossibleNonNullableValue = | SoundEffectCategories | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName;
export type PossibleValue = | SoundEffectCategories | number | string | null | undefined;

enum Enum {
    FEELINGS,
    STINGERS,
    REACTIONS,
    ANIMATIONS,
    MUSIC,
}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type PossibleEnglishName = | 'Feelings' | 'Stingers' | 'Reactions' | 'Animations' | 'Music';

type PossibleBasicImagePath = | '1 - Feelings' | '2 - Stingers' | '3 - Reactions' | '4 - Animations' | '5 - Music';
export type PossibleImagePath = `/category/sound effect/${PossibleBasicImagePath}.png`;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends SoundEffectCategories = SoundEffectCategories, > = OriginalSimpleEnum<Names, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends SoundEffectCategories = SoundEffectCategories, > = readonly [
    SimpleEnum<T>['FEELINGS'],
    SimpleEnum<T>['STINGERS'],
    SimpleEnum<T>['REACTIONS'],
    SimpleEnum<T>['ANIMATIONS'],
    SimpleEnum<T>['MUSIC'],
];
export type EnumArray_EnglishName = readonly ['Feelings', 'Stingers', 'Reactions', 'Animations', 'Music',];

//endregion -------------------- Array types --------------------
