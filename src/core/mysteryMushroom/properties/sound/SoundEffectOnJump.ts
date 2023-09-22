import type {PropertyWithAmount}     from 'core/_properties/PropertyWithAmount'
import type {ClassWithGameReference} from 'core/gameReference/ClassWithGameReference'
import type {GameReferences}         from 'core/gameReference/GameReferences'

export interface SoundEffectOnJump
    extends PropertyWithAmount<BooleanOrNotApplicable, PossibleAmount>, ClassWithGameReference<NullOr<GameReferences>> {

    /**@deprecated This field is not useful anymore */get haveMultipleImages(): boolean

}

export type PossibleGamesReceived = NullOr<string>
export type PossibleValuesReceived = NullOr<| boolean | 2 | '3 images'>

export type PossibleAmount = NullOr<| 0 | 1 | 2 | 3>
