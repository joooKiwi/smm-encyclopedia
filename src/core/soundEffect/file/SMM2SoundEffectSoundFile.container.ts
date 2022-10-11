import type {PossibleSoundEffectSoundName_SMM2}           from '../sound/types'
import type {SMM2SoundEffectSoundFile, SMM2SoundFilePath} from './SMM2SoundEffectSoundFile'
import type {SoundFileExtension}                          from './SoundEffectSoundFile'

import {NonRepeatableSoundFileContainer} from '../../../util/sound/NonRepeatableSoundFile.container'

export class SMM2SoundEffectSoundFileContainer<NAME extends PossibleSoundEffectSoundName_SMM2, >
    extends NonRepeatableSoundFileContainer<SMM2SoundFilePath, NAME, SoundFileExtension>
    implements SMM2SoundEffectSoundFile<NAME> {

    public constructor(name: NAME,) {
        super('sound/sound effect/SMM2', name, 'wav',)
    }

}
