import type {SoundPlayer} from 'util/file/sound/player/SoundPlayer'

import {isInProduction} from 'variables'

export abstract class AbstractSoundPlayer<const out KEY extends string = string, >
    implements SoundPlayer {

    //region -------------------- Constructor --------------------

    protected constructor(key: KEY,) {
        if (!isInProduction) {
            const map = AbstractSoundPlayer.allSoundPlayer
            if (map.has(key))
                throw new ReferenceError(`A duplicate sound player was found with the same key "${key}".`)
            map.set(key, this,)
        }
    }

    //endregion -------------------- Constructor --------------------

    public abstract play(): this

    public abstract pause(): this

    public abstract stop(): this

}

export namespace AbstractSoundPlayer {

    export const DEFAULT_DOES_LOOP = false

    export const allSoundPlayer = new Map<string, SoundPlayer>()

}
