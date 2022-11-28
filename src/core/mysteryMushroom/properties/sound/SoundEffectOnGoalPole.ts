import type {ClassWithGameReference}  from '../../../gameReference/ClassWithGameReference'
import type {ClassWithTranslationKey} from '../../../../lang/ClassWithTranslationKey'
import type {GameReferences}          from '../../../gameReference/GameReferences'
import type {NotApplicable, Property} from '../../../_properties/Property'
import type {NullOr}                  from '../../../../util/types'

export interface SoundEffectOnGoalPole
    extends Property<PossibleValues>, ClassWithGameReference<NullOr<GameReferences>>, ClassWithTranslationKey<PossibleTranslationKeys> {

    get simpleTranslationKey(): PossibleSimpleTranslationKeys

    get type(): PossibleTypes

}

export type PossibleGamesReceived = NullOr<string>
export type PossibleValuesReceived = NullOr<| boolean | PossibleSimpleTranslationKeys>
export type PossibleTypesReceived = PossibleTypes

/**@deprecated Create a new boolean or N/A*/export type PossibleValues = | boolean | NotApplicable
export type PossibleSimpleTranslationKeys = NullOr<`+ ${| 'sound' | '"Yatta"' | 'barks' | '"Yeah"' | 'humming' | 'singing' | 'Car sound'}`>
export type PossibleTranslationKeys = NullOr<| 'Introduction' | 'Startup' | 'Game over'
                                             | `${| 'Level' | 'Race'} finished` | 'Level finished?'
                                             | `${| 'Airship' | 'Timed event' | 'Course'} completed`
                                             | `${| 'Perfect score' | 'Upgrade' | 'Important item'} obtained`
                                             | `${| 'Star' | 'Triforce'} collected`
                                             | `Boss ${| 'key obtained' | 'defeated'}`
                                             | 'New technique acquired' | 'Gym Leader victory' | 'Rank up' | 'Secret area discovered' | 'Declaring the Splatfest\'s winning team'
                                             | 'Bowser\'s arrival' | 'Link meets Zelda for the 1st time' | 'Ganon encounter'
                                             | '3DS preview jingle'
                                             | '???'>
export type PossibleTypes = NullOr<| 'Marimba' | 'Rock'>
