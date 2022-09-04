import type {PossibleSoundEffectSoundFileNameFromBackgroundMusic_SMM2 as FileName, PossibleSoundEffectSoundNameFromBackgroundMusic_SMM2 as Name} from './types';
import type {ObjectHolder}                                                                                                                       from '../../../util/holder/ObjectHolder';
import type {SMM2SoundEffectSound}                                                                                                               from './SMM2SoundEffectSound';

import {AbstractSMM2SoundEffectSoundBuilder} from './AbstractSMM2SoundEffectSound.builder';
import {ObjectHolders}                       from '../../../util/holder/objectHolders';
import {SMM2SoundEffectSoundContainer}       from './SMM2SoundEffectSound.container';

export class SMM2SoundEffectSoundFromBackgroundMusicBuilder
    extends AbstractSMM2SoundEffectSoundBuilder<SMM2SoundEffectSound, Name, FileName> {

    public constructor(sounds: readonly Name[],)
    public constructor(...sounds: readonly Name[])
    public constructor(...sounds: readonly (Name | readonly Name[])[]) {
        super(sounds[0] instanceof Array ? sounds[0] : sounds.flat(),);
    }

    //region -------------------- Builder helper methods --------------------

    protected override _createSound(sound: Name,): FileName {
        return `smm-encyclopedia/music/SMM2/${sound}.wav`;
    }

    //endregion -------------------- Builder helper methods --------------------

    protected override _build(sounds: ObjectHolder<FileName[]>, editorSound: ObjectHolder<FileName>): SMM2SoundEffectSound {
        return new SMM2SoundEffectSoundContainer(
            sounds,
            editorSound,
            ObjectHolders.EMPTY_ARRAY,
            ObjectHolders.EMPTY_ARRAY,
        );
    }


}