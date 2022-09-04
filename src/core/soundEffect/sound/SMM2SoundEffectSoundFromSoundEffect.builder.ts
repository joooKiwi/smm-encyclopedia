import type {ObjectHolder}                                                                                                               from '../../../util/holder/ObjectHolder';
import type {PossibleSoundEffectSoundFileNameFromSoundEffect_SMM2 as FileName, PossibleSoundEffectSoundNameFromSoundEffect_SMM2 as Name} from './types';
import type {SMM2SoundEffectSound}                                                                                                       from './SMM2SoundEffectSound';

import {AbstractSMM2SoundEffectSoundBuilder} from './AbstractSMM2SoundEffectSound.builder';
import {BASE_PATH}                           from '../../../variables';
import {DelayedObjectHolderContainer}        from '../../../util/holder/DelayedObjectHolder.container';
import {SMM2SoundEffectSoundContainer}       from './SMM2SoundEffectSound.container';

export class SMM2SoundEffectSoundFromSoundEffectBuilder
    extends AbstractSMM2SoundEffectSoundBuilder<SMM2SoundEffectSound, Name, FileName> {

    public constructor(sounds: readonly Name[],)
    public constructor(...sounds: readonly Name[])
    public constructor(...sounds: readonly (Name | readonly Name[])[]) {
        super(sounds[0] instanceof Array ? sounds[0] : sounds.flat(),);
    }

    //region -------------------- Builder helper methods --------------------

    protected override _createSound(sound: Name,): FileName {
        return `${BASE_PATH}/sound/sound effect/SMM2/${sound}.wav`;
    }

    //endregion -------------------- Builder helper methods --------------------

    protected override _build(sounds: ObjectHolder<readonly FileName[]>, editorSound: ObjectHolder<FileName>,): SMM2SoundEffectSound {
        return new SMM2SoundEffectSoundContainer(
            sounds,
            editorSound,
            new DelayedObjectHolderContainer(() => this._createSounds(this._linkSounds,)),
            new DelayedObjectHolderContainer(() => this._createSounds(this._smb2Sounds,)),
        );
    }


}

