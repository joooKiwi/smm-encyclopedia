import type {NotApplicable, Property} from 'core/_properties/Property'
import type {ClassWithGameReference}  from 'core/gameReference/ClassWithGameReference'
import type {GameReferences}          from 'core/gameReference/GameReferences'
import type {ClassWithTranslationKey} from 'lang/ClassWithTranslationKey'
import type {NullOr}                  from 'util/types/nullable'

export interface SpecialMusicInStarMode
    extends Property<PossibleValues>, ClassWithGameReference<NullOr<GameReferences>>, ClassWithTranslationKey<PossibleTranslationKeys> {

}

export type PossibleValuesReceived = NullOr<| boolean | PossibleTranslationKeys>
export type PossibleGamesReceived = NullOr<| 'SM64' | 'SMK'>

/**@deprecated Create a new boolean or N/A*/export type PossibleValues = | boolean | NotApplicable
export type PossibleTranslationKeys = NullOr<| `${| 'Flying' | 'Metal'} Mario` | 'Super Star'>
