import type {ClassWithGameReference} from '../../../gameReference/ClassWithGameReference'
import type {GameReferences}         from '../../../gameReference/GameReferences'
import type {NotApplicable}          from '../../../_properties/Property'
import type {NullOr}                 from '../../../../util/types'
import type {PropertyWithAmount}     from '../../../_properties/PropertyWithAmount'

export interface SoundEffectOnJump
    extends PropertyWithAmount<PossibleValues, PossibleAmount>, ClassWithGameReference<NullOr<GameReferences>> {

    get haveMultipleImages(): boolean

}

export type PossibleGamesReceived = NullOr<string>
export type PossibleValuesReceived = NullOr<| boolean | 2 | '3 images'>

/**@deprecated Create a new boolean or N/A*/export type PossibleValues = | boolean | NotApplicable
export type PossibleAmount = NullOr<| 0 | 1 | 2>
