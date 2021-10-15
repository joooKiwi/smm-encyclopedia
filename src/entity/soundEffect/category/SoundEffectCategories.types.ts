import type {SimpleEnum}            from '../../../util/enum/Enum.types';
import type {SoundEffectCategories} from './SoundEffectCategories';

//region -------------------- Number types --------------------

export type SoundEffectCategoriesOrdinals = | 0 | 1 | 2 | 3 | 4;

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type SoundEffectCategoriesNames = 'FEELINGS' | 'STINGERS' | 'REACTIONS' | 'ANIMATIONS' | 'MUSIC';

export type PossibleSoundEffectCategoriesEnglishName = | 'Feelings' | 'Stingers' | 'Reactions' | 'Animations' | 'Music';

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleSoundEffectCategories<T = SoundEffectCategories, > = SimpleEnum<SoundEffectCategoriesNames, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type SoundEffectCategoriesArray<T = SoundEffectCategories, > = readonly [
    SimpleSoundEffectCategories<T>['FEELINGS'],
    SimpleSoundEffectCategories<T>['STINGERS'],
    SimpleSoundEffectCategories<T>['REACTIONS'],
    SimpleSoundEffectCategories<T>['ANIMATIONS'],
    SimpleSoundEffectCategories<T>['MUSIC'],
];
export type SoundEffectCategoriesEnglishNameArray = readonly ['Feelings', 'Stingers', 'Reactions', 'Animations', 'Music',];

//endregion -------------------- Array types --------------------
