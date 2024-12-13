import type {GoalPoleSoundFile} from 'core/mysteryMushroom/file/MysteryMushroom.soundFile'

import {NonRepeatableInternalSoundFileContainer} from 'util/file/sound/NonRepeatableInternalSoundFile.container'

export function goalPoleSound<const FILE_NAME extends string, >(name: FILE_NAME,): GoalPoleSoundFile<FILE_NAME> {
    return new NonRepeatableInternalSoundFileContainer(`sound/mystery mushroom/${name}`, 'goal', 'wav',)
}
