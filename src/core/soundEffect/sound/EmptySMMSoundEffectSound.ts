import type {ClassWithNullObjectPattern, EmptySMMSoundEffectSoundName} from '../../../util/ClassWithNullObjectPattern';
import type {SMM1ExclusiveSoundEffectSound}                            from './SMM1ExclusiveSoundEffectSound';
import type {SMM1StandaloneSoundEffectSound}                           from './SMM1StandaloneSoundEffectSound';
import type {SMM2SoundEffectSound}                                     from './SMM2SoundEffectSound';

import {EMPTY_ARRAY} from '../../../util/emptyVariables';

/**
 * @singleton
 */
export class EmptySMMSoundEffectSound
    implements SMM1ExclusiveSoundEffectSound<readonly [], null>,
        SMM1StandaloneSoundEffectSound<readonly [], null>,
        SMM2SoundEffectSound<readonly [], null, readonly [], readonly []>,
        ClassWithNullObjectPattern<EmptySMMSoundEffectSoundName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptySMMSoundEffectSound;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly sounds = EMPTY_ARRAY;
    public readonly linkSounds = EMPTY_ARRAY;
    public readonly editorSound = null;
    public readonly smb2Sounds = EMPTY_ARRAY;

    public readonly exclusiveSMM1Sounds = this;
    public readonly exclusiveSMM2Sounds = this;


    public toString(): EmptySMMSoundEffectSoundName {
        return 'Empty sound effect sound';
    }

}
