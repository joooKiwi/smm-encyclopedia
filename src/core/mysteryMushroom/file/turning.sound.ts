import type {TurningSoundFile} from 'core/mysteryMushroom/file/MysteryMushroom.soundFile'

import {NonRepeatableInternalSoundFileContainer} from 'util/file/sound/NonRepeatableInternalSoundFile.container'

export function turningSound<const FILE_NAME extends string, >(name: FILE_NAME,): TurningSoundFile<FILE_NAME> {
    return new NonRepeatableInternalSoundFileContainer(`sound/mystery mushroom/${name}`, 'slip', 'wav',)
}
