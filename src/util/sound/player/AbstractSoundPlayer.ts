import type {ExtendedMap} from '../../extended/ExtendedMap'
import type {SoundPlayer} from './SoundPlayer'

import {ExtendedMapContainer} from '../../extended/ExtendedMap.container'
import {isInProduction}       from '../../../variables'

export abstract class AbstractSoundPlayer<KEY extends string = string, >
    implements SoundPlayer {

    //region -------------------- Fields --------------------

    public static readonly DEFAULT_DOES_LOOP = false

    static #MAP?: ExtendedMap<string, SoundPlayer>

    //endregion -------------------- Fields --------------------

    protected constructor(key: KEY,) {
        if (!isInProduction) {
            (AbstractSoundPlayer.map)
                .if(map => map.includes(key))
                .isMet(() => {
                    throw new ReferenceError(`A duplicate sound player was found with the same key "${key}".`)
                })
                .set(key, this)
        }
    }

    public static get map(): ExtendedMap<string, SoundPlayer> {
        return this.#MAP ??= new ExtendedMapContainer()
    }

    public abstract play(): this

    public abstract pause(): this

    public abstract stop(): this

}
