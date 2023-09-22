import type {Property}               from 'core/_properties/Property'
import type {ClassWithGameReference} from 'core/gameReference/ClassWithGameReference'
import type {GameReferences}         from 'core/gameReference/GameReferences'

export interface SoundEffectWhenCollected
    extends Property<BooleanOrNotApplicable>, ClassWithGameReference<NullOr<GameReferences>> {

}

export type PossibleGamesReceived = NullOr<string>
export type PossibleValuesReceived = NullOr<boolean>
