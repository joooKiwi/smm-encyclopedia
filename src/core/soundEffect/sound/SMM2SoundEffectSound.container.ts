import type {PossibleEditorValue_SMM2, PossibleValueOnLinkOrSMB2Value_SMM2, SMM2SoundEffectSound} from 'core/soundEffect/sound/SMM2SoundEffectSound'
import type {SMM2SoundEffectSoundFile}                                                            from 'core/soundEffect/file/SMM2SoundEffectSoundFile'
import type {ObjectHolder}                                                                        from 'util/holder/ObjectHolder'

import {AbstractSoundEffectSound} from 'core/soundEffect/sound/AbstractSoundEffectSound'

export class SMM2SoundEffectSoundContainer<SOUNDS extends readonly SMM2SoundEffectSoundFile[], EDITOR_SOUND extends PossibleEditorValue_SMM2<SOUNDS>, LINK_SOUNDS extends PossibleValueOnLinkOrSMB2Value_SMM2<SOUNDS>, SMB2_SOUNDS extends PossibleValueOnLinkOrSMB2Value_SMM2<SOUNDS>, >
    extends AbstractSoundEffectSound<SOUNDS, EDITOR_SOUND, LINK_SOUNDS, SMB2_SOUNDS>
    implements SMM2SoundEffectSound<SOUNDS, EDITOR_SOUND, LINK_SOUNDS, SMB2_SOUNDS> {

    //region -------------------- Fields --------------------

    readonly #linkSounds
    readonly #smb2Sounds

    //endregion -------------------- Fields --------------------

    public constructor(sounds: ObjectHolder<SOUNDS>, editorSound: ObjectHolder<EDITOR_SOUND>, linkSounds: ObjectHolder<LINK_SOUNDS>, smb2Sounds: ObjectHolder<SMB2_SOUNDS>,) {
        super(sounds, editorSound,)
        this.#linkSounds = linkSounds
        this.#smb2Sounds = smb2Sounds
    }

    //region -------------------- Getter methods --------------------

    public override get linkSounds(): LINK_SOUNDS {
        return this.#linkSounds.get
    }

    public override get smb2Sounds(): SMB2_SOUNDS {
        return this.#smb2Sounds.get
    }

    //endregion -------------------- Getter methods --------------------

}