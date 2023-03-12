import type {GameProperty}               from 'core/entity/properties/game/GameProperty'
import type {OtherPluralWordInTheGame}   from 'core/otherWordInTheGame/OtherPluralWordInTheGame'
import type {OtherWordInTheGame}         from 'core/otherWordInTheGame/OtherWordInTheGame'
import type {Name}                       from 'lang/name/Name'
import type {NullOr}                     from 'util/types/nullable'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export abstract class AbstractOtherWordInTheGame
    extends ClassContainingAName<string>
    implements OtherWordInTheGame {

    //region -------------------- Fields --------------------

    readonly #isInProperty

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(name: Name<string>, isInProperty: GameProperty,) {
        super(name,)
        this.#isInProperty = isInProperty
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public abstract get pluralForm(): NullOr<OtherPluralWordInTheGame>

    //region -------------------- Game properties --------------------

    public get isInProperty(): GameProperty {
        return this.#isInProperty
    }

    public get isInSuperMarioMaker1(): boolean {
        return this.isInProperty.isInSuperMarioMaker1
    }

    public get isInSuperMarioMakerFor3DS(): boolean {
        return this.isInProperty.isInSuperMarioMakerFor3DS
    }

    public get isInSuperMarioMaker2(): boolean {
        return this.isInProperty.isInSuperMarioMaker2
    }

    //endregion -------------------- Game properties --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap() {
        return this.isInProperty.toGameMap()
    }

    //endregion -------------------- Convertor methods --------------------

}
