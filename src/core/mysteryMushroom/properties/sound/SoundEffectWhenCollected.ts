import type {ClassWithGameReference}  from '../../../gameReference/ClassWithGameReference'
import type {NullOr}                  from '../../../../util/types'
import type {NotApplicable, Property} from '../../../_properties/Property'
import type {GameReferences}          from '../../../gameReference/GameReferences'

export interface SoundEffectWhenCollected
    extends Property<PossibleValues>, ClassWithGameReference<NullOr<GameReferences>> {

}

export type PossibleGamesReceived = NullOr<string>
export type PossibleValuesReceived = NullOr<boolean>

/**@deprecated Create a new boolean or N/A*/export type PossibleValues = | boolean | NotApplicable
