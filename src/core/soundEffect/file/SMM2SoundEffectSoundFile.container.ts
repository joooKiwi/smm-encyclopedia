import type {SMM2SoundEffectSoundFile, SMM2SoundFilePath} from 'core/soundEffect/file/SMM2SoundEffectSoundFile'
import type {SoundFileExtension}                          from 'core/soundEffect/file/SoundEffectSoundFile'
import type {PossibleSoundEffectSoundName_SMM2}           from 'core/soundEffect/sound/types'

import {NonRepeatableSoundFileContainer} from 'util/file/sound/NonRepeatableSoundFile.container'

export class SMM2SoundEffectSoundFileContainer<NAME extends PossibleSoundEffectSoundName_SMM2, >
    extends NonRepeatableSoundFileContainer<SMM2SoundFilePath, NAME, SoundFileExtension>
    implements SMM2SoundEffectSoundFile<NAME> {

    public constructor(name: NAME,) {
        super('sound/sound effect/SMM2', name, 'wav',)
    }

}
