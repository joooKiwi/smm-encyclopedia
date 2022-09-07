import type {ObjectHolder}                                                             from '../../../util/holder/ObjectHolder';
import type {PossibleSoundEffectSoundFileName_SMM1, PossibleSoundEffectSoundName_SMM1} from './types';
import type {SMM1ExclusiveSoundEffectSound}                                            from './SMM1ExclusiveSoundEffectSound';

import {AbstractExclusiveSoundEffectSoundBuilder} from './AbstractExclusiveSoundEffectSound.builder';
import {BASE_PATH}                                from '../../../variables';
import {SMM1ExclusiveSoundEffectSoundContainer}   from './SMM1ExclusiveSoundEffectSound.container';

export class SMM1ExclusiveSoundEffectSoundBuilder
    extends AbstractExclusiveSoundEffectSoundBuilder<SMM1ExclusiveSoundEffectSound, PossibleSoundEffectSoundName_SMM1, PossibleSoundEffectSoundFileName_SMM1> {

    public constructor(sounds: readonly PossibleSoundEffectSoundName_SMM1[],)
    public constructor(...sounds: readonly PossibleSoundEffectSoundName_SMM1[])
    public constructor(...sounds: readonly (| PossibleSoundEffectSoundName_SMM1 | readonly PossibleSoundEffectSoundName_SMM1[])[]) {
        super(sounds[0] instanceof Array ? sounds[0] : sounds.flat(),);
    }

    //region -------------------- Builder helper methods --------------------

    protected override _createSound(sound: PossibleSoundEffectSoundName_SMM1,): PossibleSoundEffectSoundFileName_SMM1 {
        return `${BASE_PATH}/sound/sound effect/SMM1/${sound}.wav`;
    }

    //endregion -------------------- Builder helper methods --------------------

    protected override _build(sounds: ObjectHolder<readonly PossibleSoundEffectSoundFileName_SMM1[]>, editorSound: ObjectHolder<PossibleSoundEffectSoundFileName_SMM1>,): SMM1ExclusiveSoundEffectSound {
        return new SMM1ExclusiveSoundEffectSoundContainer(sounds, editorSound,);
    }

}
