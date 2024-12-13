import type {FirstJumpSoundFile} from 'core/mysteryMushroom/file/MysteryMushroom.soundFile'

import {NonRepeatableInternalSoundFileContainer} from 'util/file/sound/NonRepeatableInternalSoundFile.container'

export function jumpSound<const FILE_NAME extends string, >(name: FILE_NAME,): FirstJumpSoundFile<FILE_NAME> {
    return new NonRepeatableInternalSoundFileContainer(`sound/mystery mushroom/${name}`, 'jump', 'wav',)
}
