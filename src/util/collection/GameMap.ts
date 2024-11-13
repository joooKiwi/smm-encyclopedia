import type {UndefinedOr} from '@joookiwi/type'

import type {GameProperty} from 'core/entity/properties/game/GameProperty'

import {Games} from 'core/game/Games'

/**
 * A map made to be handled the same way as a {@link Map},
 * but with a specification about the {@link Games}
 *
 * @see GameCollection
 */
export class GameMap<const out T extends boolean = boolean, const out REFERENCE extends GameProperty<T, T, T> = GameProperty<T, T, T>, >
    implements ReadonlyMap<Games, T> {

    //region -------------------- Fields --------------------

    readonly #reference
    readonly #internalStructure: ReadonlyMap<Games, T>
    public readonly size

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(reference: REFERENCE,) {
        this.#reference = reference
        this.size = (this.#internalStructure = new Map(Games.CompanionEnum.get.values.map(it => [it, it.get(reference,) as T,],),)).size
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get reference(): REFERENCE {
        return this.#reference
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public forEach(callback: (value: T, key: Games, map: ReadonlyMap<Games, T>,) => void,): this {
        this.#internalStructure.forEach(callback,)
        return this
    }

    public get(key: Games,): UndefinedOr<T> {
        return this.#internalStructure.get(key,)
    }

    public has(key: Games,): boolean {
        return this.#internalStructure.has(key,)
    }


    public entries(): MapIterator<[Games, T,]> {
        return this.#internalStructure.entries()
    }

    public keys(): MapIterator<Games> {
        return this.#internalStructure.keys()
    }

    public values(): MapIterator<T> {
        return this.#internalStructure.values()
    }

    public [Symbol.iterator](): MapIterator<[Games, T,]> {
        return this.#internalStructure[Symbol.iterator]()
    }

    //endregion -------------------- Methods --------------------

}
