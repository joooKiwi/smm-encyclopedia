import type {SMM1SoundEffectSoundFile, SMM1SoundFilePath} from './SMM1SoundEffectSoundFile'
import type {PossibleSoundEffectSoundName_SMM1}           from '../sound/types'
import type {SoundFileExtension}                          from './SoundEffectSoundFile'

import {NonRepeatableSoundFileContainer} from '../../../util/sound/NonRepeatableSoundFile.container'

export class SMM1SoundEffectSoundFileContainer<NAME extends PossibleSoundEffectSoundName_SMM1, >
    extends NonRepeatableSoundFileContainer<SMM1SoundFilePath, NAME, SoundFileExtension>
    implements SMM1SoundEffectSoundFile<NAME> {

    public constructor(name: NAME,) {
        super('sound/sound effect/SMM1', name, 'wav',)
    }

}
