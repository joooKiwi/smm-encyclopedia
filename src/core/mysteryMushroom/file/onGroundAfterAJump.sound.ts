import type {OnGroundAfterAJumpSoundFile}        from 'core/mysteryMushroom/file/MysteryMushroom.soundFile'
import {NonRepeatableInternalSoundFileContainer} from 'util/file/sound/NonRepeatableInternalSoundFile.container'

export function onGroundAfterAJumpSound<const FILE_NAME extends string, >(name: FILE_NAME,): OnGroundAfterAJumpSoundFile<FILE_NAME> {
    return new NonRepeatableInternalSoundFileContainer(`sound/mystery mushroom/${name}`, 'ground', 'wav',)
}
