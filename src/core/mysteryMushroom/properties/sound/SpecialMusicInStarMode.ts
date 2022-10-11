import type {ClassWithGameReference}  from '../../../gameReference/ClassWithGameReference'
import type {ClassWithTranslationKey} from '../../../../lang/ClassWithTranslationKey'
import type {GameReferences}          from '../../../gameReference/GameReferences'
import type {NotApplicable, Property} from '../../../_properties/Property'

export interface SpecialMusicInStarMode
    extends Property<PossibleValues>, ClassWithGameReference<PossibleGames>, ClassWithTranslationKey<PossibleTranslationKeys> {

}

export type PossibleValuesReceived = | boolean | PossibleTranslationKeys | null
export type PossibleGamesReceived = | 'SM64' | 'SMK' | null

export type PossibleGames = | GameReferences | null
export type PossibleValues = | boolean | NotApplicable
export type PossibleTranslationKeys = `${| 'Flying' | 'Metal'} Mario` | 'Super Star' | null
