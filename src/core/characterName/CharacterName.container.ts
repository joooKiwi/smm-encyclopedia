import type {CharacterName} from 'core/characterName/CharacterName'
import type {GameProperty}  from 'core/entity/properties/game/GameProperty'
import type {Games}         from 'core/game/Games'
import type {Name}          from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export class CharacterNameContainer
    extends ClassContainingAName<string>
    implements CharacterName {

    //region -------------------- Fields --------------------

    readonly #gameProperty

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>, gameProperty: GameProperty,) {
        super(name,)
        this.#gameProperty = gameProperty
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Properties --------------------

    public get gamePropertyContainer() {
        return this.#gameProperty
    }

    public get isInSuperMarioMaker1(): boolean {
        return this.gamePropertyContainer.isInSuperMarioMaker1
    }

    public get isInSuperMarioMakerFor3DS(): boolean {
        return this.gamePropertyContainer.isInSuperMarioMakerFor3DS
    }

    public get isInSuperMarioMaker2(): boolean {
        return this.gamePropertyContainer.isInSuperMarioMaker2
    }

    //endregion -------------------- Properties --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.gamePropertyContainer.toGameMap()
    }

    //endregion -------------------- Methods --------------------

}