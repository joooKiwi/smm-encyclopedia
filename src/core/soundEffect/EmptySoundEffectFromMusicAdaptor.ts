import type {SoundEffectFromMusicAdaptor} from 'core/soundEffect/SoundEffectFromMusicAdaptor'

import {Empty} from 'util/emptyVariables'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY

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
