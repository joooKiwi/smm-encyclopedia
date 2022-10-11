import type {PossibleSoundEffectMusicEditorName, PossibleSoundEffectMusicFileName, PossibleSoundEffectMusicName, SoundEffectMusic} from './SoundEffectMusic'

import {AbstractMusic} from '../AbstractMusic'

export abstract class AbstractSoundEffectMusic<ALL extends PossibleSoundEffectMusicFileName, SOUND_EFFECT extends PossibleSoundEffectMusicName, EDITOR_SOUND_EFFECT extends PossibleSoundEffectMusicEditorName, >
    extends AbstractMusic<ALL>
    implements SoundEffectMusic<ALL, SOUND_EFFECT, EDITOR_SOUND_EFFECT> {

    //region -------------------- Fields --------------------

    readonly #soundEffect
    readonly #editorSoundEffect

    //endregion -------------------- Fields --------------------

    protected constructor(name: SOUND_EFFECT, editorName: EDITOR_SOUND_EFFECT,) {
        super()
        this.#soundEffect = name == null ? name : name
        this.#editorSoundEffect = editorName == null ? editorName : editorName
    }

    //region -------------------- Getter methods --------------------

    public get soundEffect(): SOUND_EFFECT {
        return this.#soundEffect
    }

    public get editorSoundEffect(): EDITOR_SOUND_EFFECT {
        return this.#editorSoundEffect
    }

    //endregion -------------------- Getter methods --------------------

}
