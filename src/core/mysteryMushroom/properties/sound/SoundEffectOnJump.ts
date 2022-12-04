import type {NotApplicable}          from 'core/_properties/Property'
import type {PropertyWithAmount}     from 'core/_properties/PropertyWithAmount'
import type {ClassWithGameReference} from 'core/gameReference/ClassWithGameReference'
import type {GameReferences}         from 'core/gameReference/GameReferences'
import type {NullOr}                 from 'util/types/nullable'

export interface SoundEffectOnJump
    extends PropertyWithAmount<PossibleValues, PossibleAmount>, ClassWithGameReference<NullOr<GameReferences>> {

    get haveMultipleImages(): boolean

}

export type PossibleGamesReceived = NullOr<string>
export type PossibleValuesReceived = NullOr<| boolean | 2 | '3 images'>

/**@deprecated Create a new boolean or N/A*/export type PossibleValues = | boolean | NotApplicable
export type PossibleAmount = NullOr<| 0 | 1 | 2>
