import type {NotApplicable, Property} from 'core/_properties/Property'
import type {ClassWithGameReference}  from 'core/gameReference/ClassWithGameReference'
import type {GameReferences}          from 'core/gameReference/GameReferences'
import type {NullOr}                  from 'util/types/nullable'

export interface SoundEffectWhenCollected
    extends Property<PossibleValues>, ClassWithGameReference<NullOr<GameReferences>> {

}

export type PossibleGamesReceived = NullOr<string>
export type PossibleValuesReceived = NullOr<boolean>

/**@deprecated Create a new boolean or N/A*/export type PossibleValues = | boolean | NotApplicable
