import type {SoundEffectFromMusicAdaptor} from 'core/soundEffect/SoundEffectFromMusicAdaptor'

import {EMPTY_ARRAY} from 'util/emptyVariables'

export class EmptySoundEffectFromMusicAdaptor
    implements SoundEffectFromMusicAdaptor {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptySoundEffectFromMusicAdaptor

    private constructor() {}

    public static get get() {
        return this.#instance ??= new EmptySoundEffectFromMusicAdaptor()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly sounds = EMPTY_ARRAY
    public readonly editorSound = null
    public readonly linkSounds = EMPTY_ARRAY
    public readonly smb2Sounds = EMPTY_ARRAY

}
