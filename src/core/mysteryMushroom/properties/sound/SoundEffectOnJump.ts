import type {PropertyWithAmount}     from 'core/_properties/PropertyWithAmount'
import type {ClassWithGameReference} from 'core/gameReference/ClassWithGameReference'
import type {GameReferences}         from 'core/gameReference/GameReferences'
import type {NullOr}                 from 'util/types/nullable'
import type {BooleanOrNotApplicable} from 'util/types/variables'

export interface SoundEffectOnJump
    extends PropertyWithAmount<BooleanOrNotApplicable, PossibleAmount>, ClassWithGameReference<NullOr<GameReferences>> {

    get haveMultipleImages(): boolean

}

export type PossibleGamesReceived = NullOr<string>
export type PossibleValuesReceived = NullOr<| boolean | 2 | '3 images'>

export type PossibleAmount = NullOr<| 0 | 1 | 2>
