import type {ClassWithGameReference}  from '../../../gameReference/ClassWithGameReference'
import type {GameReferences}          from '../../../gameReference/GameReferences'
import type {NotApplicable, Property} from '../../../_properties/Property'
import type {NullOr}                  from '../../../../util/types'

export interface SoundEffectOnGroundAfterJump
    extends Property<PossibleValues>, ClassWithGameReference<NullOr<GameReferences>> {

}

export type PossibleGamesReceived = NullOr<string>
export type PossibleValuesReceived = NullOr<boolean>

/**@deprecated Create a new boolean or N/A*/export type PossibleValues = | boolean | NotApplicable
