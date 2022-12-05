import type {Property}               from 'core/_properties/Property'
import type {NullOr}                 from 'util/types/nullable'
import type {BooleanOrNotApplicable} from 'util/types/variables'

export interface SoundEffectOnTurnAfterRun
    extends Property<BooleanOrNotApplicable> {

}

export type PossibleValuesReceived = NullOr<boolean>
