import type {SimpleEnum} from '../../util/enum/Enum.types';
import type {Games}      from './Games';

//region -------------------- Number types --------------------

export type GamesOrdinals = | 0 | 1;

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type GamesNames = | 'SUPER_MARIO_MAKER_1' | 'SUPER_MARIO_MAKER_2';

export type PossibleGameName = `Super Mario Maker${| '' | ' 2'}`;
export type PossibleImagePath = `/game/logos/${PossibleGameName}.svg`;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleGames<T = Games, > = SimpleEnum<GamesNames, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type GamesArray<T = Games, > = readonly [
    SimpleGames<T>['SUPER_MARIO_MAKER_1'],
    SimpleGames<T>['SUPER_MARIO_MAKER_2'],
];

//endregion -------------------- Array types --------------------
