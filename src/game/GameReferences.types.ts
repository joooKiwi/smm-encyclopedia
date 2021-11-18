import type {GameReferences}                                                    from './GameReferences';
import type {PossibleEnglishName as PossibleGameEnglishName}                    from '../entity/game/Games.types';
import type {PossibleEnglishName as PossibleGameStyleEnglishName}               from '../entity/gameStyle/GameStyles.types';
import type {PossibleEnglishName_Games as PossibleSoundEffectsEnglishNameGames} from '../entity/soundEffect/simple/SoundEffects.types';
import type {SimpleEnum as OriginalSimpleEnum}                                  from '../util/enum/Enum.types';

export type PossibleNonNullableValue = | GameReferences | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName;
export type PossibleValue = | GameReferences | number | string | null | undefined;

enum Enum {

    SUPER_MARIO_BROS, SUPER_MARIO_BROS_2, SUPER_MARIO_BROS_3,

    SUPER_MARIO_KART,

    SUPER_MARIO_LAND,

    SUPER_MARIO_64,

    SUPER_MARIO_SUNSHINE,

    SUPER_MARIO_GALAXY,

    NEW_SUPER_MARIO_BROS_U, SUPER_MARIO_3D_WORLD,


    SUPER_MARIO_MAKER_1, SUPER_MARIO_MAKER_2,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type PossibleExclusiveEnglishName = `Super Mario ${| 'Land' | 'Bros. 2'}`;
export type PossibleExternalEnglishName = | PossibleGameStyleEnglishName | PossibleGameEnglishName | PossibleSoundEffectsEnglishNameGames;
export type PossibleEnglishName = | PossibleExclusiveEnglishName | PossibleExternalEnglishName;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends GameReferences = GameReferences, > = OriginalSimpleEnum<Names, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends GameReferences = GameReferences, > = readonly [
    SimpleEnum<T>['SUPER_MARIO_BROS'], SimpleEnum<T>['SUPER_MARIO_BROS_2'], SimpleEnum<T>['SUPER_MARIO_BROS_3'],
    SimpleEnum<T>['SUPER_MARIO_KART'],
    SimpleEnum<T>['SUPER_MARIO_LAND'],
    SimpleEnum<T>['SUPER_MARIO_64'],
    SimpleEnum<T>['SUPER_MARIO_SUNSHINE'],
    SimpleEnum<T>['SUPER_MARIO_GALAXY'],
    SimpleEnum<T>['NEW_SUPER_MARIO_BROS_U'], SimpleEnum<T>['SUPER_MARIO_3D_WORLD'],

    SimpleEnum<T>['SUPER_MARIO_MAKER_1'], SimpleEnum<T>['SUPER_MARIO_MAKER_2'],
];

//endregion -------------------- Array types --------------------
