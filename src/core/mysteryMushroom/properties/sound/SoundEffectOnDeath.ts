import type {ClassWithGameReference}  from '../../../gameReference/ClassWithGameReference'
import type {ClassWithTranslationKey} from '../../../../lang/ClassWithTranslationKey'
import type {GameReferences}          from '../../../gameReference/GameReferences'
import type {NotApplicable, Property} from '../../../_properties/Property'

export interface SoundEffectOnDeath
    extends Property<PossibleValues>, ClassWithGameReference<PossibleGames>, ClassWithTranslationKey<PossibleTranslationKeys> {

    get simpleTranslationKey(): PossibleSimpleTranslationKeys

    get type(): PossibleTypes

}

export type PossibleGamesReceived = | string | null
export type PossibleValuesReceived = | boolean | NonNullable<PossibleSimpleTranslationKeys> | null
export type PossibleTypesReceived = PossibleTypes

export type PossibleGames = | GameReferences | null
export type PossibleValues = | boolean | NotApplicable
export type PossibleSimpleTranslationKeys = | `+ "${| 'Oh no' | 'Nooo' | 'Woah' | 'Yaha'}!"` | null
export type PossibleTranslationKeys = | 'Game over' | 'Defeated' | 'Error sound'
                                      | 'Boss defeated' | 'Dog laughing'
                                      | `Lost ${| 'a life' | 'an Arwing'}` | 'Falling offscreen'
                                      | `Eliminated from the ${| 'race' | 'course'}` | 'Player has fainted'
                                      | `${| 'Minigame' | 'Round'} lost`
                                      | 'Timed event failed' | 'Ran out of energy' | 'Practice Catcher result jingle'
                                      | 'Bowser\'s death' | 'Mario saying "Mama mia"' | 'Zelda\'s Lullaby' | 'Link caught by Moblins' | 'K.K. howling' | 'Pikmin death'
                                      | '???' | null
export type PossibleTypes = | 'Marimba' | 'Techno' | null
