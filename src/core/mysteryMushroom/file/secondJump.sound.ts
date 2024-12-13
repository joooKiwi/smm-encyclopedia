import type {SecondJumpSoundFile} from 'core/mysteryMushroom/file/MysteryMushroom.soundFile'

import {NonRepeatableInternalSoundFileContainer} from 'util/file/sound/NonRepeatableInternalSoundFile.container'

export function secondJumpSound<const FILE_NAME extends string, >(name: FILE_NAME,): SecondJumpSoundFile<FILE_NAME> {
    return new NonRepeatableInternalSoundFileContainer(`sound/mystery mushroom/${name}`, 'jump2', 'wav',)
}
