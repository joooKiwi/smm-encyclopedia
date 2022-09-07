import type {ObjectHolder}                     from '../../../util/holder/ObjectHolder';
import type {PossibleEditorValue}              from './SoundEffectSound';
import type {PossibleSoundEffectSoundFileName} from './types';
import type {SMM1ExclusiveSoundEffectSound}    from './SMM1ExclusiveSoundEffectSound';
import type {SMM1StandaloneSoundEffectSound}   from './SMM1StandaloneSoundEffectSound';
import type {SMM2SoundEffectSound}             from './SMM2SoundEffectSound';

import {AbstractSoundEffectSound} from './AbstractSoundEffectSound';
import {EMPTY_ARRAY}              from '../../../util/emptyVariables';

export class SMM1StandaloneSoundEffectSoundContainer<SOUNDS extends readonly PossibleSoundEffectSoundFileName[], EDITOR_SOUND extends PossibleEditorValue<SOUNDS>, >
    extends AbstractSoundEffectSound<SOUNDS, EDITOR_SOUND, readonly [], readonly []>
    implements SMM1StandaloneSoundEffectSound<SOUNDS, EDITOR_SOUND> {

    //region -------------------- Fields --------------------

    readonly #exclusiveSMM1Sounds;
    readonly #exclusiveSMM2Sounds;

    //endregion -------------------- Fields --------------------


    public constructor(sounds: ObjectHolder<SOUNDS>, editorSound: ObjectHolder<EDITOR_SOUND>,
                       smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
        super(sounds, editorSound,);
        this.#exclusiveSMM1Sounds = smm1;
        this.#exclusiveSMM2Sounds = smm2;
    }

    //region -------------------- Getter methods --------------------

    public override readonly linkSounds = EMPTY_ARRAY;
    public override readonly smb2Sounds = EMPTY_ARRAY;


    public get exclusiveSMM1Sounds(): SMM1ExclusiveSoundEffectSound {
        return this.#exclusiveSMM1Sounds;
    }

    public get exclusiveSMM2Sounds(): SMM2SoundEffectSound {
        return this.#exclusiveSMM2Sounds;
    }

    //endregion -------------------- Getter methods --------------------

}
