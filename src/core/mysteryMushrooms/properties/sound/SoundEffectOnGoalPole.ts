import type {ClassWithGameReference}  from '../../../../game/ClassWithGameReference';
import type {ClassWithTranslationKey} from '../../../../lang/ClassWithTranslationKey';
import type {GameReferences}          from '../../../../game/GameReferences';
import type {NotApplicable, Property} from '../../../_properties/Property';

export interface SoundEffectOnGoalPole
    extends Property<PossibleValues>, ClassWithGameReference<PossibleGames>, ClassWithTranslationKey<PossibleTranslationKeys> {

    get simpleTranslationKey(): PossibleSimpleTranslationKeys

    get type(): PossibleTypes

}

export type PossibleGamesReceived = | string | null;
export type PossibleValuesReceived = | boolean | PossibleSimpleTranslationKeys | null;
export type PossibleTypesReceived = PossibleTypes;

export type PossibleGames = | GameReferences | null;
export type PossibleValues = | boolean | NotApplicable;
export type PossibleSimpleTranslationKeys = `+ ${| 'sound' | '"Yatta"' | 'barks' | '"Yeah"' | 'humming' | 'singing' | 'Car sound'}` | null;
export type PossibleTranslationKeys = | 'Introduction' | 'Startup' | 'Game over'
                                      | `${| 'Level' | 'Race'} finished` | 'Level finished?'
                                      | `${| 'Airship' | 'Timed event' | 'Course'} completed`
                                      | `${| 'Perfect score' | 'Upgrade' | 'Important item'} obtained`
                                      | `${| 'Star' | 'Triforce'} collected`
                                      | `Boss ${| 'key obtained' | 'defeated'}`
                                      | 'New technique acquired' | 'Gym Leader victory' | 'Rank up' | 'Secret area discovered' | 'Declaring the Splatfest\'s winning team'
                                      | 'Bowser\'s arrival' | 'Link meets Zelda for the 1st time' | 'Ganon encounter'
                                      | '3DS preview jingle'
                                      | '???' | null;
export type PossibleTypes = | 'Marimba' | 'Rock' | null;
