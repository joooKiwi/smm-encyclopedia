import type {NotApplicable, Property} from '../../../_properties/Property'
import type {NullOr}                  from '../../../../util/types'

export interface SoundEffectOnTurnAfterRun
    extends Property<PossibleValues> {

}

export type PossibleValuesReceived = NullOr<boolean>

/**@deprecated Create a new boolean or N/A*/export type PossibleValues = | boolean | NotApplicable
