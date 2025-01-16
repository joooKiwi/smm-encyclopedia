import type {UndefinedOr} from '@joookiwi/type'
import {mapByArray}       from '@joookiwi/collection'

import type {ThemeProperty} from 'core/entity/properties/theme/ThemeProperty'

import {Themes} from 'core/theme/Themes'

/**
 * A map made to be handled the same way as a {@link Map},
 * but with a specification about the {@link Themes}
 */
export class ThemeMap<const REFERENCE extends ThemeProperty = ThemeProperty, >
    implements ReadonlyMap<Themes, boolean> {

    //region -------------------- Fields --------------------

    readonly #reference
    readonly #internalStructure: ReadonlyMap<Themes, boolean>
    public readonly size

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(reference: REFERENCE,) {
        this.#reference = reference
        this.size = (this.#internalStructure = new Map(mapByArray(Themes.COURSE_THEMES, it => [it, it.get(reference,),],),)).size
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get reference(): REFERENCE {
        return this.#reference
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public forEach(callback: (value: boolean, key: Themes, map: ReadonlyMap<Themes, boolean>,) => void,): this {
        this.#internalStructure.forEach(callback,)
        return this
    }

    public get(key: Themes,): UndefinedOr<boolean> {
        return this.#internalStructure.get(key,)
    }

    public has(key: Themes,): boolean {
        return this.#internalStructure.has(key,)
    }


    public entries(): MapIterator<[Themes, boolean,]> {
        return this.#internalStructure.entries()
    }

    public keys(): MapIterator<Themes> {
        return this.#internalStructure.keys()
    }

    public values(): MapIterator<boolean> {
        return this.#internalStructure.values()
    }

    public [Symbol.iterator](): MapIterator<[Themes, boolean,]> {
        return this.#internalStructure[Symbol.iterator]()
    }

    //endregion -------------------- Methods --------------------

}
