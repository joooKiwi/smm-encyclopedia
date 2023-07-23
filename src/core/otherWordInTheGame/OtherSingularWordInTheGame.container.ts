import type {GameProperty}               from 'core/entity/properties/game/GameProperty'
import type {OtherPluralWordInTheGame}   from 'core/otherWordInTheGame/OtherPluralWordInTheGame'
import type {OtherSingularWordInTheGame} from 'core/otherWordInTheGame/OtherSingularWordInTheGame'
import type {Name}                       from 'lang/name/Name'

import {AbstractOtherWordInTheGame} from 'core/otherWordInTheGame/AbstractOtherWordInTheGame'

export class OtherSingularWordInTheGameContainer
    extends AbstractOtherWordInTheGame
    implements OtherSingularWordInTheGame {

    //region -------------------- Fields --------------------

    readonly #pluralForm

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>, isInProperty: GameProperty, pluralForm: NullOr<OtherPluralWordInTheGame>,) {
        super(name, isInProperty,)
        this.#pluralForm = pluralForm
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public override get pluralForm(): NullOr<OtherPluralWordInTheGame> {
        return this.#pluralForm
    }

    //endregion -------------------- Getter methods --------------------

}
