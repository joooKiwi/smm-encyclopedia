import type {Property}                from 'core/_properties/Property'
import type {ClassWithGameReference}  from 'core/gameReference/ClassWithGameReference'
import type {GameReferences}          from 'core/gameReference/GameReferences'
import type {ClassWithTranslationKey} from 'lang/ClassWithTranslationKey'

export interface SpecialMusicInStarMode
    extends Property<BooleanOrNotApplicable>, ClassWithGameReference<NullOr<GameReferences>>, ClassWithTranslationKey<PossibleTranslationKeys> {

}

export type PossibleValuesReceived = NullOr<| boolean | PossibleTranslationKeys>
export type PossibleGamesReceived = NullOr<| 'SM64' | 'SMK'>

export type PossibleTranslationKeys = NullOr<| `${| 'Flying' | 'Metal'} Mario` | 'Super Star'>
