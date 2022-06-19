import {NotApplicable, Property} from '../../../_properties/Property';

export interface SoundEffectOnTurnAfterRun
    extends Property<PossibleValues> {

}

export type PossibleValuesReceived = | boolean | null;

export type PossibleValues = | boolean | NotApplicable;
