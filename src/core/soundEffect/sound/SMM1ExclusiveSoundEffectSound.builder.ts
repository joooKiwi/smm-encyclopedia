import type {ObjectHolder}                      from '../../../util/holder/ObjectHolder';
import type {PossibleSoundEffectSoundName_SMM1} from './types';
import type {SMM1ExclusiveSoundEffectSound}     from './SMM1ExclusiveSoundEffectSound';
import type {SMM1SoundEffectSoundFile}          from '../file/SMM1SoundEffectSoundFile';

import {AbstractExclusiveSoundEffectSoundBuilder} from './AbstractExclusiveSoundEffectSound.builder';
import {SMM1ExclusiveSoundEffectSoundContainer}   from './SMM1ExclusiveSoundEffectSound.container';
import {SMM1SoundEffectSoundFileContainer}        from '../file/SMM1SoundEffectSoundFile.container';

export class SMM1ExclusiveSoundEffectSoundBuilder
    extends AbstractExclusiveSoundEffectSoundBuilder<SMM1ExclusiveSoundEffectSound, PossibleSoundEffectSoundName_SMM1, SMM1SoundEffectSoundFile> {

    public constructor(sounds: readonly PossibleSoundEffectSoundName_SMM1[],)
    public constructor(...sounds: readonly PossibleSoundEffectSoundName_SMM1[])
    public constructor(...sounds: readonly (| PossibleSoundEffectSoundName_SMM1 | readonly PossibleSoundEffectSoundName_SMM1[])[]) {
        super(sounds[0] instanceof Array ? sounds[0] : sounds.flat(),);
    }

    //region -------------------- Builder helper methods --------------------

    protected override _createSound(sound: PossibleSoundEffectSoundName_SMM1,): SMM1SoundEffectSoundFile {
        return new SMM1SoundEffectSoundFileContainer(sound,);
    }

    //endregion -------------------- Builder helper methods --------------------

    protected override _build(sounds: ObjectHolder<readonly SMM1SoundEffectSoundFile[]>, editorSound: ObjectHolder<SMM1SoundEffectSoundFile>,): SMM1ExclusiveSoundEffectSound {
        return new SMM1ExclusiveSoundEffectSoundContainer(sounds, editorSound,);
    }

}
