import type {Property}                from 'core/_properties/Property'
import type {ClassWithTranslationKey} from 'lang/ClassWithTranslationKey'

export interface SoundEffectOnMovement
    extends Property<BooleanOrNotApplicable>, ClassWithTranslationKey<PossibleTranslationKeys> {

}

export type PossibleValuesReceived = NullOr<| boolean | PossibleTranslationKeys>

export type PossibleTranslationKeys = NullOr<| 'Twinkle' | 'Engine sound'>
