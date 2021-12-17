import type {GameStyles}                       from './GameStyles';
import type {GameStyles as OriginalGameStyles} from '../../gameStyle/GameStyles';

export type BasicGamePath = | '1 - SMB' | '2 - SMB3' | '3 - SMW' | '4 - NSMBU' | '5 - SM3DW';
export type GamePath_Editor = `/entities/${BasicGamePath}/`;
export type GamePath_ClearCondition = `/entities/${BasicGamePath}/Clear Condition/`;

export type GameAcronym = | 'M1' | 'M3' | 'MW' | 'WU' | '3W';

export type PossibleGameStyle = | GameStyles | OriginalGameStyles;
