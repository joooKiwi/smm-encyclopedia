import type {NullOr} from '@joookiwi/type'

import type {OtherPluralWordInTheGame}   from 'core/otherWordInTheGame/OtherPluralWordInTheGame'
import type {OtherSingularWordInTheGame} from 'core/otherWordInTheGame/OtherSingularWordInTheGame'
import type {Name}                       from 'lang/name/Name'

import {AbstractOtherWordInTheGame} from 'core/otherWordInTheGame/AbstractOtherWordInTheGame'

export class OtherSingularWordInTheGameContainer
    extends AbstractOtherWordInTheGame
    implements OtherSingularWordInTheGame {

    readonly #pluralForm

    public constructor(name: Name<string>, isInSuperMarioMaker1: boolean, isInSuperMarioMakerFor3DS: boolean, isInSuperMarioMaker2: boolean, pluralForm: NullOr<OtherPluralWordInTheGame>,) {
        super(name, isInSuperMarioMaker1, isInSuperMarioMakerFor3DS, isInSuperMarioMaker2,)
        this.#pluralForm = pluralForm
    }

    public override get pluralForm(): NullOr<OtherPluralWordInTheGame> {
        return this.#pluralForm
    }

}
