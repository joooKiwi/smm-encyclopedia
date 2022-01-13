import type {ClassWithGameReference}  from '../../../gameReference/ClassWithGameReference';
import type {GameReferences}          from '../../../gameReference/GameReferences';
import type {NotApplicable, Property} from '../../../_properties/Property';

export interface SoundEffectOnTaunt
    extends Property<PossibleValues>, ClassWithGameReference<PossibleGames> {

}

export type PossibleValuesReceived = | boolean | null;
export type PossibleGamesReceived = | string | null;

export type PossibleValues = | boolean | NotApplicable;
export type PossibleGames = | GameReferences | null;
