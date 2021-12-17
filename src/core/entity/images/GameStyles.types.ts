import type {GameStyles}                       from './GameStyles';
import type {GameStyles as OriginalGameStyles} from '../../gameStyle/GameStyles';
import type {PossibleShortImagePath}           from '../../gameStyle/GameStyles.types';

export type GamePath_Editor = `/entities/${PossibleShortImagePath}/Editor`;
export type GamePath_ClearCondition = `/entities/${PossibleShortImagePath}/Clear Condition/`;

export type PossibleGameStyle = | GameStyles | OriginalGameStyles;
