import type {Array} from '@joookiwi/type'
import {mapByArray} from '@joookiwi/collection'

import type {SoundPlayer} from 'util/file/sound/SoundPlayer'

/**
 * Load all the {@link SoundPlayer} in the method received asynchronously.
 *
 * It does that by synchronizing the tracks while they load and then wait after every track has been loaded.
 *
 * @param tracks The {@link SoundPlayer}s to load and synchronize there loading
 */
export function loadAllTracks(...tracks: Array<SoundPlayer>): Promise<Array<void>> {
    return Promise.all(mapByArray(tracks, it => new Promise<void>(resolve => loadTrackOnPromise(it, 10, resolve,),),),)
}

function loadTrackOnPromise(track: SoundPlayer, delay: number, resolve: () => void,): void {
    track.load()
    const intervalId = setInterval(() => {
        if (track.isLoading)
            return

        clearInterval(intervalId,)
        resolve()
    }, delay,)
}
