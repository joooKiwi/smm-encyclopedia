import type {OtherPluralWordInTheGame} from 'core/otherWordInTheGame/OtherPluralWordInTheGame'
import type {Name}                     from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export class OtherPluralWordInTheGameContainer
    extends ClassContainingAName<string>
    implements OtherPluralWordInTheGame {

    public constructor(name: Name<string>,) {
        super(name,)
    }

}
