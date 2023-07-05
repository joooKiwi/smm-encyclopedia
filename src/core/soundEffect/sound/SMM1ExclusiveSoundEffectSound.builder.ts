import type {Lazy} from '@joookiwi/lazy'

import type {SMM1SoundEffectSoundFile}          from 'core/soundEffect/file/SMM1SoundEffectSoundFile'
import type {SMM1ExclusiveSoundEffectSound}     from 'core/soundEffect/sound/SMM1ExclusiveSoundEffectSound'
import type {PossibleSoundEffectSoundName_SMM1} from 'core/soundEffect/sound/types'

import {SMM1SoundEffectSoundFileContainer}        from 'core/soundEffect/file/SMM1SoundEffectSoundFile.container'
import {AbstractExclusiveSoundEffectSoundBuilder} from 'core/soundEffect/sound/AbstractExclusiveSoundEffectSound.builder'
import {SMM1ExclusiveSoundEffectSoundContainer}   from 'core/soundEffect/sound/SMM1ExclusiveSoundEffectSound.container'

export class SMM1ExclusiveSoundEffectSoundBuilder
    extends AbstractExclusiveSoundEffectSoundBuilder<SMM1ExclusiveSoundEffectSound, PossibleSoundEffectSoundName_SMM1, SMM1SoundEffectSoundFile> {

    public constructor(sounds: readonly PossibleSoundEffectSoundName_SMM1[],)
    public constructor(...sounds: readonly PossibleSoundEffectSoundName_SMM1[])
    public constructor(...sounds: readonly (| PossibleSoundEffectSoundName_SMM1 | readonly PossibleSoundEffectSoundName_SMM1[])[]) {
        super(sounds[0] instanceof Array ? sounds[0] : sounds.flat(),)
    }

    //region -------------------- Builder helper methods --------------------

    protected override _createSound(sound: PossibleSoundEffectSoundName_SMM1,): SMM1SoundEffectSoundFile {
        return new SMM1SoundEffectSoundFileContainer(sound,)
    }

    //endregion -------------------- Builder helper methods --------------------

    protected override _build(sounds: Lazy<readonly SMM1SoundEffectSoundFile[]>, editorSound: Lazy<SMM1SoundEffectSoundFile>,): SMM1ExclusiveSoundEffectSound {
        return new SMM1ExclusiveSoundEffectSoundContainer(sounds, editorSound,)
    }

}
