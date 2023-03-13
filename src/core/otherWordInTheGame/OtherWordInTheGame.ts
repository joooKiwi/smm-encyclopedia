import type {GameProperty}             from 'core/entity/properties/game/GameProperty'
import type {OtherPluralWordInTheGame} from 'core/otherWordInTheGame/OtherPluralWordInTheGame'
import type {NameTrait}                from 'lang/name/NameTrait'
import type {NullOr}                   from 'util/types/nullable'

export interface OtherWordInTheGame
    extends NameTrait<string>, GameProperty {

    get pluralForm(): NullOr<OtherPluralWordInTheGame>

}

