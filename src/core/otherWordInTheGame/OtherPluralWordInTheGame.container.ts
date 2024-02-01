import type {OtherPluralWordInTheGame} from 'core/otherWordInTheGame/OtherPluralWordInTheGame'
import type {Name}                     from 'lang/name/Name'

import {AbstractOtherWordInTheGame} from 'core/otherWordInTheGame/AbstractOtherWordInTheGame'

export class OtherPluralWordInTheGameContainer
    extends AbstractOtherWordInTheGame
    implements OtherPluralWordInTheGame {

    public constructor(name: Name<string>, isInSuperMarioMaker1: boolean, isInSuperMarioMakerFor3DS: boolean, isInSuperMarioMaker2: boolean,) {
        super(name, isInSuperMarioMaker1, isInSuperMarioMakerFor3DS, isInSuperMarioMaker2,)
    }

    public readonly pluralForm = null

}
