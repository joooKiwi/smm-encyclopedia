import type {ClassWithType}           from 'core/ClassWithType'
import type {Property}                from 'core/_properties/Property'
import type {ClassWithGameReference}  from 'core/gameReference/ClassWithGameReference'
import type {GameReferences}          from 'core/gameReference/GameReferences'
import type {ClassWithTranslationKey} from 'lang/ClassWithTranslationKey'

export interface SoundEffectOnGoalPole
    extends Property<BooleanOrNotApplicable>,
        ClassWithType<PossibleTypes>,
        ClassWithGameReference<NullOr<GameReferences>>,
        ClassWithTranslationKey<PossibleTranslationKeys> {

    get simpleTranslationKey(): PossibleSimpleTranslationKeys

}

export type PossibleGamesReceived = NullOr<string>
export type PossibleValuesReceived = NullOr<| boolean | PossibleSimpleTranslationKeys>
export type PossibleTypesReceived = PossibleTypes

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
                                             | UnknownReference>
export type PossibleTypes = NullOr<| 'Marimba' | 'Rock'>
