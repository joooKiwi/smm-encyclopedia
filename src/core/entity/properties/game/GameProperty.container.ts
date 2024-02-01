import type {GameProperty}  from 'core/entity/properties/game/GameProperty'
import type {Games}         from 'core/game/Games'
import type {GameStructure} from 'core/game/GameStructure'

import {GameMap} from 'util/collection/GameMap'

export class GamePropertyContainer
    implements GameProperty {

    //region -------------------- Fields --------------------

    #map?: GameMap<boolean, GameProperty>
    readonly #structure

    //endregion -------------------- Fields --------------------

    constructor(structure: GameStructure<boolean, boolean, boolean>,) {
        this.#structure = structure
    }

    //region -------------------- Getter methods --------------------

    public get isInSuperMarioMaker1(): boolean {
        return this.#structure.superMarioMaker
    }

    public get isInSuperMarioMakerFor3DS(): boolean {
        return this.#structure.superMarioMakerForNintendo3DS
    }

    public get isInSuperMarioMaker2(): boolean {
        return this.#structure.superMarioMaker2
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.#map ??= new GameMap(this,)
    }

    //endregion -------------------- Convertor methods --------------------

}
