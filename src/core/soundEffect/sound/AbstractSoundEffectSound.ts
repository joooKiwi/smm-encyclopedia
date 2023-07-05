import type {Lazy} from '@joookiwi/lazy'

import type {SoundEffectSoundFile}                                                  from 'core/soundEffect/file/SoundEffectSoundFile'
import type {PossibleEditorValue, PossibleValueOnLinkOrSMB2Value, SoundEffectSound} from 'core/soundEffect/sound/SoundEffectSound'

export abstract class AbstractSoundEffectSound<SOUNDS extends readonly SoundEffectSoundFile[], EDITOR_SOUND extends PossibleEditorValue<SOUNDS>,
    LINK_SOUNDS extends PossibleValueOnLinkOrSMB2Value<SOUNDS>,
    SMB2_SOUNDS extends PossibleValueOnLinkOrSMB2Value<SOUNDS>, >
    implements SoundEffectSound<SOUNDS, EDITOR_SOUND> {

    //region -------------------- Fields --------------------

    readonly #sounds
    readonly #editorSounds

    //endregion -------------------- Fields --------------------

    protected constructor(sounds: Lazy<SOUNDS>, editorSound: Lazy<EDITOR_SOUND>,) {
        this.#sounds = sounds
        this.#editorSounds = editorSound
    }

    //region -------------------- Getter methods --------------------

    public get sounds(): SOUNDS {
        return this.#sounds.value
    }

    public get editorSound(): EDITOR_SOUND {
        return this.#editorSounds.value
    }

    public abstract get linkSounds(): LINK_SOUNDS

    public abstract get smb2Sounds(): SMB2_SOUNDS

    //endregion -------------------- Getter methods --------------------

}
