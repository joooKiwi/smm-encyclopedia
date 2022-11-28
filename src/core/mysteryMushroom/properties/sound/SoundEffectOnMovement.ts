import type {ClassWithTranslationKey} from '../../../../lang/ClassWithTranslationKey'
import type {NotApplicable, Property} from '../../../_properties/Property'
import type {NullOr}                  from '../../../../util/types'

export interface SoundEffectOnMovement
    extends Property<PossibleValues>, ClassWithTranslationKey<PossibleTranslationKeys> {

}

export type PossibleValuesReceived = NullOr<| boolean | PossibleTranslationKeys>

/**@deprecated Create a new boolean or N/A*/export type PossibleValues = | boolean | NotApplicable
export type PossibleTranslationKeys = NullOr<| 'Twinkle' | 'Engine sound'>
