import type {GameReferences}                       from './GameReferences';
import type {PossibleGameName}                     from '../entity/game/Games.types';
import type {PossibleGameStyleName}                from '../entity/gameStyle/GameStyles.types';
import type {SimpleEnum}                           from '../util/enum/Enum.types';
import type {PossibleSoundEffectsEnglishNameGames} from '../entity/soundEffect/simple/SoundEffects.types';

//region -------------------- Number types --------------------

export type GameReferencesOrdinals = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
                                     | 11 | 12;

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type GameReferencesNames =
    | `SUPER_MARIO_${| `BROS${| '' | `_${| 2 | 3}`}` | 'LAND' | 'KART' | 64 | 'SUNSHINE' | 'GALAXY' | '3D_WORLD' | `MAKER_${| 1 | 2}`}` | 'NEW_SUPER_MARIO_BROS_U';

export type PossibleExclusiveGameReferencesEnglishName = `Super Mario ${| 'Land' | 'Bros. 2'}`;
export type PossibleExternalGameReferencesEnglishName = | PossibleGameStyleName | PossibleGameName | PossibleSoundEffectsEnglishNameGames;
export type PossibleGameReferencesEnglishName = | PossibleExclusiveGameReferencesEnglishName | PossibleExternalGameReferencesEnglishName;


//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleGameReferences<T = GameReferences, > = SimpleEnum<GameReferencesNames, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type GameReferencesArray<T = GameReferences, > = readonly [
    SimpleGameReferences<T>['SUPER_MARIO_BROS'], SimpleGameReferences<T>['SUPER_MARIO_BROS_2'], SimpleGameReferences<T>['SUPER_MARIO_BROS_3'],
    SimpleGameReferences<T>['SUPER_MARIO_KART'],
    SimpleGameReferences<T>['SUPER_MARIO_LAND'],
    SimpleGameReferences<T>['SUPER_MARIO_64'],
    SimpleGameReferences<T>['SUPER_MARIO_SUNSHINE'],
    SimpleGameReferences<T>['SUPER_MARIO_GALAXY'],
    SimpleGameReferences<T>['NEW_SUPER_MARIO_BROS_U'], SimpleGameReferences<T>['SUPER_MARIO_3D_WORLD'],

    SimpleGameReferences<T>['SUPER_MARIO_MAKER_1'], SimpleGameReferences<T>['SUPER_MARIO_MAKER_2'],
];

//endregion -------------------- Array types --------------------
