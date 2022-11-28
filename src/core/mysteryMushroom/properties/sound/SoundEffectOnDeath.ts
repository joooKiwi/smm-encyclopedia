import type {ClassWithGameReference}  from '../../../gameReference/ClassWithGameReference'
import type {ClassWithTranslationKey} from '../../../../lang/ClassWithTranslationKey'
import type {GameReferences}          from '../../../gameReference/GameReferences'
import type {NotApplicable, Property} from '../../../_properties/Property'
import type {NullOr}                  from '../../../../util/types'

export interface SoundEffectOnDeath
    extends Property<PossibleValues>, ClassWithGameReference<NullOr<GameReferences>>, ClassWithTranslationKey<PossibleTranslationKeys> {

    get simpleTranslationKey(): PossibleSimpleTranslationKeys

    get type(): PossibleTypes

}

export type PossibleGamesReceived = NullOr<string>
export type PossibleValuesReceived = NullOr<| boolean | NonNullable<PossibleSimpleTranslationKeys>>
export type PossibleTypesReceived = PossibleTypes

/**@deprecated Create a new boolean or N/A*/export type PossibleValues = | boolean | NotApplicable
export type PossibleSimpleTranslationKeys = NullOr<`+ "${| 'Oh no' | 'Nooo' | 'Woah' | 'Yaha'}!"`>
export type PossibleTranslationKeys = NullOr<| 'Game over' | 'Defeated' | 'Error sound'
                                             | 'Boss defeated' | 'Dog laughing'
                                             | `Lost ${| 'a life' | 'an Arwing'}` | 'Falling offscreen'
                                             | `Eliminated from the ${| 'race' | 'course'}` | 'Player has fainted'
                                             | `${| 'Minigame' | 'Round'} lost`
                                             | 'Timed event failed' | 'Ran out of energy' | 'Practice Catcher result jingle'
                                             | 'Bowser\'s death' | 'Mario saying "Mama mia"' | 'Zelda\'s Lullaby' | 'Link caught by Moblins' | 'K.K. howling' | 'Pikmin death'
                                             | '???'>
export type PossibleTypes = NullOr<| 'Marimba' | 'Techno'>
