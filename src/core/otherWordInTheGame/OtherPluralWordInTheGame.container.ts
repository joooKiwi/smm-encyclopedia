import type {GameProperty}             from 'core/entity/properties/game/GameProperty'
import type {OtherPluralWordInTheGame} from 'core/otherWordInTheGame/OtherPluralWordInTheGame'
import type {Name}                     from 'lang/name/Name'

import {AbstractOtherWordInTheGame} from 'core/otherWordInTheGame/AbstractOtherWordInTheGame'

export class OtherPluralWordInTheGameContainer
    extends AbstractOtherWordInTheGame
    implements OtherPluralWordInTheGame {

    public constructor(name: Name<string>, isInProperty: GameProperty,) {
        super(name, isInProperty,)
    }

    public readonly pluralForm = null

}
