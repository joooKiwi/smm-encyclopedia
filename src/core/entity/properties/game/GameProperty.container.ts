import type {GameProperty}  from 'core/entity/properties/game/GameProperty'
import type {GameStructure} from 'core/game/GameStructure'

import {Games} from 'core/game/Games'

export class GamePropertyContainer
    implements GameProperty {

    //region -------------------- Fields --------------------

    #map?: ReadonlyMap<Games, boolean>
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
        return this.#map ??= new Map(Games.values.map(game => [game, game.get(this),]))
    }

    //endregion -------------------- Convertor methods --------------------

}
