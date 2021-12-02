import type {ClassWithGameReference}  from '../../../../game/ClassWithGameReference';
import type {GameReferences}          from '../../../../game/GameReferences';
import type {NotApplicable, Property} from '../../../_properties/Property';

export interface SoundEffectOnGroundAfterJump
    extends Property<PossibleValues>, ClassWithGameReference<PossibleGames> {

}

export type PossibleGamesReceived = | string | null;
export type PossibleValuesReceived = | boolean | null;

export type PossibleGames = | GameReferences | null;
export type PossibleValues = | boolean | NotApplicable;
