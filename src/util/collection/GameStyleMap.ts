import type {GameStyleProperty} from 'core/entity/properties/gameStyle/GameStyleProperty'

import {GameStyles} from 'core/gameStyle/GameStyles'

/**
 * A map made to be handled the same way as a {@link Map},
 * but with a specification about the {@link GameStyles}
 */
export class GameStyleMap<const out REFERENCE extends GameStyleProperty = GameStyleProperty, >
    implements ReadonlyMap<GameStyles, boolean> {

    //region -------------------- Fields --------------------

    readonly #reference
    readonly #internalStructure: ReadonlyMap<GameStyles, boolean>
    public readonly size

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(reference: REFERENCE,) {
        this.#reference = reference
        this.size = (this.#internalStructure = new Map(GameStyles.CompanionEnum.get.values.map(it => [it, it.get(reference,),],),)).size
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get reference(): REFERENCE {
        return this.#reference
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public forEach(callback: (value: boolean, key: GameStyles, map: ReadonlyMap<GameStyles, boolean>,) => void,): this {
        this.#internalStructure.forEach(callback,)
        return this
    }

    public get(key: GameStyles,): UndefinedOr<boolean> {
        return this.#internalStructure.get(key,)
    }

    public has(key: GameStyles,): boolean {
        return this.#internalStructure.has(key,)
    }


    public entries(): MapIterator<[GameStyles, boolean,]> {
        return this.#internalStructure.entries()
    }

    public keys(): MapIterator<GameStyles> {
        return this.#internalStructure.keys()
    }

    public values(): MapIterator<boolean> {
        return this.#internalStructure.values()
    }

    public [Symbol.iterator](): MapIterator<[GameStyles, boolean,]> {
        return this.#internalStructure[Symbol.iterator]()
    }

    //endregion -------------------- Methods --------------------

}
