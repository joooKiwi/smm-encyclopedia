import type {SoundPlayer} from 'util/file/sound/player/SoundPlayer'

import {isInProduction} from 'variables'

export abstract class AbstractSoundPlayer<KEY extends string = string, >
    implements SoundPlayer {

    //region -------------------- Fields --------------------

    public static readonly DEFAULT_DOES_LOOP = false

    static #map?: Map<string, SoundPlayer>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(key: KEY,) {
        if (!isInProduction) {
            const map = AbstractSoundPlayer.map
            if (map.has(key))
                throw new ReferenceError(`A duplicate sound player was found with the same key "${key}".`)
            map.set(key, this,)
        }
    }

    //endregion -------------------- Constructor --------------------

    public static get map(): Map<string, SoundPlayer> {
        return this.#map ??= new Map()
    }

    public abstract play(): this

    public abstract pause(): this

    public abstract stop(): this

}
