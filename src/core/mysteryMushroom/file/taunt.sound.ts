import type {TauntSoundFile} from 'core/mysteryMushroom/file/MysteryMushroom.soundFile'

import {NonRepeatableInternalSoundFileContainer} from 'util/file/sound/NonRepeatableInternalSoundFile.container'

export function tauntSound<const FILE_NAME extends string, >(name: FILE_NAME,): TauntSoundFile<FILE_NAME> {
    return new NonRepeatableInternalSoundFileContainer(`sound/mystery mushroom/${name}`, 'appeal', 'wav',)
}
