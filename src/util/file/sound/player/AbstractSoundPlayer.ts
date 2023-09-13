import type {ExtendedMap} from 'util/extended/ExtendedMap'
import type {SoundPlayer} from 'util/file/sound/player/SoundPlayer'

import {isInProduction}       from 'variables'
import {ExtendedMapContainer} from 'util/extended/ExtendedMap.container'

export abstract class AbstractSoundPlayer<KEY extends string = string, >
    implements SoundPlayer {

    //region -------------------- Fields --------------------

    public static readonly DEFAULT_DOES_LOOP = false

    static #MAP?: ExtendedMap<string, SoundPlayer>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(key: KEY,) {
        if (!isInProduction) {
            AbstractSoundPlayer.map
                .if(map => map.includes(key))
                .isMet(() => {
                    throw new ReferenceError(`A duplicate sound player was found with the same key "${key}".`)
                })
                .set(key, this)
        }
    }

    //endregion -------------------- Constructor --------------------

    public static get map(): ExtendedMap<string, SoundPlayer> {
        return this.#MAP ??= new ExtendedMapContainer()
    }

    public abstract play(): this

    public abstract pause(): this

    public abstract stop(): this

}
