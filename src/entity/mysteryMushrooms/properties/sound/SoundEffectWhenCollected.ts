import type {ClassWithGameReference}  from '../../../../game/ClassWithGameReference';
import type {NotApplicable, Property} from '../../../_properties/Property';
import type {GameReferences}          from '../../../../game/GameReferences';

export interface SoundEffectWhenCollected
    extends Property<PossibleValues>, ClassWithGameReference<PossibleGames> {

}

export type PossibleValuesReceived = | boolean | null;
export type PossibleGamesReceived = | string | null;

export type PossibleValues = | boolean | NotApplicable;
export type PossibleGames = | GameReferences | null;
