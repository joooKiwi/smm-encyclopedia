import type {SoundEffectSoundFile}                                                  from 'core/soundEffect/file/SoundEffectSoundFile'
import type {PossibleEditorValue, PossibleValueOnLinkOrSMB2Value, SoundEffectSound} from 'core/soundEffect/sound/SoundEffectSound'

export abstract class AbstractSoundEffectSound<const out SOUNDS extends readonly SoundEffectSoundFile[], EDITOR_SOUND extends PossibleEditorValue<SOUNDS>,
    const out LINK_SOUNDS extends PossibleValueOnLinkOrSMB2Value<SOUNDS>,
    const out SMB2_SOUNDS extends PossibleValueOnLinkOrSMB2Value<SOUNDS>, >
    implements SoundEffectSound<SOUNDS, EDITOR_SOUND> {

    //region -------------------- Fields --------------------

    readonly #sounds
    readonly #editorSounds: EDITOR_SOUND

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(sounds: SOUNDS, editorSound: EDITOR_SOUND,) {
        this.#sounds = sounds
        this.#editorSounds = editorSound
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get sounds(): SOUNDS {
        return this.#sounds
    }

    public get editorSound(): EDITOR_SOUND {
        return this.#editorSounds
    }

    public abstract get linkSounds(): LINK_SOUNDS

    public abstract get smb2Sounds(): SMB2_SOUNDS

    //endregion -------------------- Getter methods --------------------

}
