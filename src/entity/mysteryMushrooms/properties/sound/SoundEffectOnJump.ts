import type {ClassWithGameReference} from '../../../../game/ClassWithGameReference';
import type {GameReferences}         from '../../../../game/GameReferences';
import type {NotApplicable}          from '../../../_properties/Property';
import type {PropertyWithAmount}     from '../../../_properties/PropertyWithAmount';

export interface SoundEffectOnJump
    extends PropertyWithAmount<PossibleValues, PossibleAmount>, ClassWithGameReference<PossibleGames> {

    get haveMultipleImages(): boolean

}

export type PossibleGamesReceived = | string | null;
export type PossibleValuesReceived = | boolean | 2 | '3 images' | null;

export type PossibleGames = | GameReferences | null;
export type PossibleValues = | boolean | NotApplicable;
export type PossibleAmount = | 0 | 1 | 2 | null;
