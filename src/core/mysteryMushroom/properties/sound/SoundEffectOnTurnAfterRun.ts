import type {NotApplicable, Property} from 'core/_properties/Property'
import type {NullOr}                  from 'util/types/nullable'

export interface SoundEffectOnTurnAfterRun
    extends Property<PossibleValues> {

}

export type PossibleValuesReceived = NullOr<boolean>

/**@deprecated Create a new boolean or N/A*/export type PossibleValues = | boolean | NotApplicable
