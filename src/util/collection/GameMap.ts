import type {UndefinedOrBoolean} from '@joookiwi/type'

import type {GameProperty} from 'core/entity/properties/game/GameProperty'

import {Games} from 'core/game/Games'

/**
 * A map made to be handled the same way as a {@link Map},
 * but with a specification about the {@link Games}
 *
 * @see GameCollection
 */
export class GameMap<const out REFERENCE extends GameProperty = GameProperty, >
    implements ReadonlyMap<Games, boolean> {

    //region -------------------- Fields --------------------

    readonly #reference
    readonly #internalStructure: ReadonlyMap<Games, boolean>
    public readonly size

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(reference: REFERENCE,) {
        this.#reference = reference
        this.size = (this.#internalStructure = new Map(Games.ALL.map(it => [it, it.get(reference,),],),)).size
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get reference(): REFERENCE {
        return this.#reference
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public forEach(callback: (value: boolean, key: Games, map: ReadonlyMap<Games, boolean>,) => void,): this {
        this.#internalStructure.forEach(callback,)
        return this
    }

    public get(key: Games,): UndefinedOrBoolean {
        return this.#internalStructure.get(key,)
    }

    public has(key: Games,): boolean {
        return this.#internalStructure.has(key,)
    }


    public entries(): MapIterator<[Games, boolean,]> {
        return this.#internalStructure.entries()
    }

    public keys(): MapIterator<Games> {
        return this.#internalStructure.keys()
    }

    public values(): MapIterator<boolean> {
        return this.#internalStructure.values()
    }

    public [Symbol.iterator](): MapIterator<[Games, boolean,]> {
        return this.#internalStructure[Symbol.iterator]()
    }

    //endregion -------------------- Methods --------------------

}
