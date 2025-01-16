import type {PowerUpCollectedSoundFile} from 'core/mysteryMushroom/file/MysteryMushroom.soundFile'

import {NonRepeatableInternalSoundFileContainer} from 'util/file/sound/NonRepeatableInternalSoundFile.container'

export function powerUpCollectedSound<const FILE_NAME extends string, >(name: FILE_NAME,): PowerUpCollectedSoundFile<FILE_NAME> {
    return new NonRepeatableInternalSoundFileContainer(`sound/mystery mushroom/${name}`, 'powerup', 'wav',)
}
