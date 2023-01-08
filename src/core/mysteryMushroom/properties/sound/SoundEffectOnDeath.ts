import type {Property}                                 from 'core/_properties/Property'
import type {ClassWithGameReference}                   from 'core/gameReference/ClassWithGameReference'
import type {GameReferences}                           from 'core/gameReference/GameReferences'
import type {ClassWithTranslationKey}                  from 'lang/ClassWithTranslationKey'
import type {NullOr}                                   from 'util/types/nullable'
import type {BooleanOrNotApplicable, UnknownReference} from 'util/types/variables'

export interface SoundEffectOnDeath
    extends Property<BooleanOrNotApplicable>, ClassWithGameReference<NullOr<GameReferences>>, ClassWithTranslationKey<PossibleTranslationKeys> {

    get simpleTranslationKey(): PossibleSimpleTranslationKeys

    get type(): PossibleTypes

}

export type PossibleGamesReceived = NullOr<string>
export type PossibleValuesReceived = NullOr<| boolean | NonNullable<PossibleSimpleTranslationKeys>>
export type PossibleTypesReceived = PossibleTypes

export type PossibleSimpleTranslationKeys = NullOr<`+ "${| `Rooo…` | `${| 'Oh no' | 'Nooo' | 'Woah' | 'Yaha'}!`}"`>
export type PossibleTranslationKeys = NullOr<| 'Game over' | 'Defeated' | 'Error sound'
                                             | 'Boss defeated' | 'Dog laughing'
                                             | `Lost ${| 'a life' | 'an Arwing'}` | 'Falling offscreen'
                                             | `Eliminated from the ${| 'race' | 'course'}` | 'Player has fainted'
                                             | `${| 'Minigame' | 'Round'} lost`
                                             | 'Timed event failed' | 'Ran out of energy' | 'Practice Catcher result jingle'
                                             | 'Bowser\'s death' | 'Mario saying "Mama mia"' | 'Zelda\'s Lullaby' | 'Link caught by Moblins' | 'K.K. howling' | 'Pikmin death'
                                             | UnknownReference>
export type PossibleTypes = NullOr<| 'Marimba' | 'Techno'>
