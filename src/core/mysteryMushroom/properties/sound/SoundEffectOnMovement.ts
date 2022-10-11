import type {ClassWithTranslationKey} from '../../../../lang/ClassWithTranslationKey'
import type {NotApplicable, Property} from '../../../_properties/Property'

export interface SoundEffectOnMovement
    extends Property<PossibleValues>, ClassWithTranslationKey<PossibleTranslationKeys> {

}

export type PossibleValuesReceived = | boolean | PossibleTranslationKeys | null

export type PossibleValues = | boolean | NotApplicable
export type PossibleTranslationKeys = | 'Twinkle' | 'Engine sound' | null
