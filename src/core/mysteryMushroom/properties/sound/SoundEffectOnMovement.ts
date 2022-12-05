import type {Property}                from 'core/_properties/Property'
import type {ClassWithTranslationKey} from 'lang/ClassWithTranslationKey'
import type {NullOr}                  from 'util/types/nullable'
import type {BooleanOrNotApplicable}  from 'util/types/variables'

export interface SoundEffectOnMovement
    extends Property<BooleanOrNotApplicable>, ClassWithTranslationKey<PossibleTranslationKeys> {

}

export type PossibleValuesReceived = NullOr<| boolean | PossibleTranslationKeys>

export type PossibleTranslationKeys = NullOr<| 'Twinkle' | 'Engine sound'>
