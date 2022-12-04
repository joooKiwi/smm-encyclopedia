import type {SMM1ExclusiveSoundEffectSound}                            from 'core/soundEffect/sound/SMM1ExclusiveSoundEffectSound'
import type {SMM1StandaloneSoundEffectSound}                           from 'core/soundEffect/sound/SMM1StandaloneSoundEffectSound'
import type {SMM2SoundEffectSound}                                     from 'core/soundEffect/sound/SMM2SoundEffectSound'
import type {ClassWithNullObjectPattern, EmptySMMSoundEffectSoundName} from 'util/ClassWithNullObjectPattern'

import {EMPTY_ARRAY} from 'util/emptyVariables'

/**
 * @singleton
 */
export class EmptySMMSoundEffectSound
    implements SMM1ExclusiveSoundEffectSound<readonly [], null>,
        SMM1StandaloneSoundEffectSound<readonly [], null>,
        SMM2SoundEffectSound<readonly [], null, readonly [], readonly []>,
        ClassWithNullObjectPattern<EmptySMMSoundEffectSoundName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptySMMSoundEffectSound

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly sounds = EMPTY_ARRAY
    public readonly linkSounds = EMPTY_ARRAY
    public readonly editorSound = null
    public readonly smb2Sounds = EMPTY_ARRAY

    public readonly exclusiveSMM1Sounds = this
    public readonly exclusiveSMM2Sounds = this


    public toString(): EmptySMMSoundEffectSoundName {
        return 'Empty sound effect sound'
    }

}
