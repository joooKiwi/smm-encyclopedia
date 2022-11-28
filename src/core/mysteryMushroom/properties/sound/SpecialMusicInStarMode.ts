import type {ClassWithGameReference}  from '../../../gameReference/ClassWithGameReference'
import type {ClassWithTranslationKey} from '../../../../lang/ClassWithTranslationKey'
import type {GameReferences}          from '../../../gameReference/GameReferences'
import type {NotApplicable, Property} from '../../../_properties/Property'
import type {NullOr}                  from '../../../../util/types'

export interface SpecialMusicInStarMode
    extends Property<PossibleValues>, ClassWithGameReference<NullOr<GameReferences>>, ClassWithTranslationKey<PossibleTranslationKeys> {

}

export type PossibleValuesReceived = NullOr<| boolean | PossibleTranslationKeys>
export type PossibleGamesReceived = NullOr<| 'SM64' | 'SMK'>

/**@deprecated Create a new boolean or N/A*/export type PossibleValues = | boolean | NotApplicable
export type PossibleTranslationKeys = NullOr<| `${| 'Flying' | 'Metal'} Mario` | 'Super Star'>
