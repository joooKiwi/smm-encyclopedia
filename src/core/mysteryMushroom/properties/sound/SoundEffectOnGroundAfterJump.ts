import type {Property}               from 'core/_properties/Property'
import type {ClassWithGameReference} from 'core/gameReference/ClassWithGameReference'
import type {GameReferences}         from 'core/gameReference/GameReferences'
import type {NullOr}                 from 'util/types/nullable'
import type {BooleanOrNotApplicable} from 'util/types/variables'

export interface SoundEffectOnGroundAfterJump
    extends Property<BooleanOrNotApplicable>, ClassWithGameReference<NullOr<GameReferences>> {

}

export type PossibleGamesReceived = NullOr<string>
export type PossibleValuesReceived = NullOr<boolean>
