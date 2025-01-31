import type {SoundFile} from 'util/file/sound/SoundFile'

import {SoundPlayer} from 'util/file/sound/SoundPlayer'
import {NullOr}      from '@joookiwi/type'

const all = new Map<SoundFile, SoundPlayer>()

export function getSoundPlayer<const FILE extends SoundFile = SoundFile,>(file: FILE,): NullOr<SoundPlayer<FILE>>
export function getSoundPlayer(file: SoundFile,) {
    if (all.has(file,))
        return all.get(file,)
    return null
}

export function getOrCreateSoundPlayer<const FILE extends SoundFile = SoundFile, const TITLE extends string = string, >(file: FILE, title: TITLE,): SoundPlayer<FILE, TITLE>
export function getOrCreateSoundPlayer(file: SoundFile, title: string,) {
    if (all.has(file,)) {
        console.warn(`A duplicate sound player was found with the same key “${file.key}”.`,)
        return all.get(file,)
    }
    return new SoundPlayer(file, title,)
}
