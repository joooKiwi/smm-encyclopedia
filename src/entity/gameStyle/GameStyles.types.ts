import type {GameStyles} from './GameStyles';
import type {SimpleEnum} from '../../util/enum/EnumTypes';


export type PossibleGameStyleAcronym = |'SMB' | 'SMB3' | 'SMW' | 'NSMBU' | 'SM3DW';
export type PossibleGameStyleName = `Super Mario ${`Bros.${'' | ' 3'}` | `${'' | '3D '}World`}` | 'New Super Mario Bros. U';

export type StartingImagePath = `/game/styles/${PossibleGameStyleName}`;
export type SmallImagePath = `${StartingImagePath} - small.png`;
export type MediumImagePath = `${StartingImagePath} - medium.png`;
export type LargeImagePath = `${StartingImagePath} - large.png`;
export type PossibleImagePath = `${StartingImagePath} - ${'small' | 'medium' | 'large'}.png`;

//region -------------------- Enum types --------------------

export type GameStylesOrdinals = | 0 | 1 | 2 | 3 | 4;
export type GameStylesNames = | 'SUPER_MARIO_BROS' | 'SUPER_MARIO_BROS_3' | 'SUPER_MARIO_WORLD' | 'NEW_SUPER_MARIO_BROS_U' | 'SUPER_MARIO_3D_WORLD';
export type SimpleGameStyles<T = GameStyles, > = SimpleEnum<GameStylesNames, T>;
export type GameStylesArray<T = GameStyles, > = readonly [
    SimpleGameStyles<T>['SUPER_MARIO_BROS'],
    SimpleGameStyles<T>['SUPER_MARIO_BROS_3'],
    SimpleGameStyles<T>['SUPER_MARIO_WORLD'],
    SimpleGameStyles<T>['NEW_SUPER_MARIO_BROS_U'],
    SimpleGameStyles<T>['SUPER_MARIO_3D_WORLD'],
];

//endregion -------------------- Enum types --------------------

