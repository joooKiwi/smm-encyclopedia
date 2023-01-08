import type {SMM1SoundEffectSoundFile, SMM1SoundFilePath} from 'core/soundEffect/file/SMM1SoundEffectSoundFile'
import type {SoundFileExtension}                          from 'core/soundEffect/file/SoundEffectSoundFile'
import type {PossibleSoundEffectSoundName_SMM1}           from 'core/soundEffect/sound/types'

import {NonRepeatableSoundFileContainer} from 'util/file/sound/NonRepeatableSoundFile.container'

export class SMM1SoundEffectSoundFileContainer<NAME extends PossibleSoundEffectSoundName_SMM1, >
    extends NonRepeatableSoundFileContainer<SMM1SoundFilePath, NAME, SoundFileExtension>
    implements SMM1SoundEffectSoundFile<NAME> {

    public constructor(name: NAME,) {
        super('sound/sound effect/SMM1', name, 'wav',)
    }

}
