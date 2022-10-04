import type {PossibleEditorValue, PossibleValueOnLinkOrSMB2Value, SoundEffectSound} from './SoundEffectSound';
import type {ObjectHolder}                                                          from '../../../util/holder/ObjectHolder';
import type {SoundEffectSoundFile}                                                  from '../file/SoundEffectSoundFile';

export abstract class AbstractSoundEffectSound<SOUNDS extends readonly SoundEffectSoundFile[], EDITOR_SOUND extends PossibleEditorValue<SOUNDS>,
    LINK_SOUNDS extends PossibleValueOnLinkOrSMB2Value<SOUNDS>,
    SMB2_SOUNDS extends PossibleValueOnLinkOrSMB2Value<SOUNDS>, >
    implements SoundEffectSound<SOUNDS, EDITOR_SOUND> {

    //region -------------------- Fields --------------------

    readonly #sounds;
    readonly #editorSounds;

    //endregion -------------------- Fields --------------------

    protected constructor(sounds: ObjectHolder<SOUNDS>, editorSound: ObjectHolder<EDITOR_SOUND>,) {
        this.#sounds = sounds;
        this.#editorSounds = editorSound;
    }

    //region -------------------- Getter methods --------------------

    public get sounds(): SOUNDS {
        return this.#sounds.get;
    }

    public get editorSound(): EDITOR_SOUND {
        return this.#editorSounds.get;
    }

    public abstract get linkSounds(): LINK_SOUNDS;

    public abstract get smb2Sounds(): SMB2_SOUNDS;

    //endregion -------------------- Getter methods --------------------

}
