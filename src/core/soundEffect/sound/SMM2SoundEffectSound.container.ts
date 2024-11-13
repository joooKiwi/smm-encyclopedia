import type {Array} from '@joookiwi/type'

import type {SMM2SoundEffectSoundFile}                                                            from 'core/soundEffect/file/SoundEffectSoundFile'
import type {PossibleEditorValue_SMM2, PossibleValueOnLinkOrSMB2Value_SMM2, SMM2SoundEffectSound} from 'core/soundEffect/sound/SMM2SoundEffectSound'

import {AbstractSoundEffectSound} from 'core/soundEffect/sound/AbstractSoundEffectSound'

export class SMM2SoundEffectSoundContainer<const SOUNDS extends Array<SMM2SoundEffectSoundFile>,
    const EDITOR_SOUND extends PossibleEditorValue_SMM2<SOUNDS>,
    const LINK_SOUNDS extends PossibleValueOnLinkOrSMB2Value_SMM2<SOUNDS>,
    const SMB2_SOUNDS extends PossibleValueOnLinkOrSMB2Value_SMM2<SOUNDS>, >
    extends AbstractSoundEffectSound<SOUNDS, EDITOR_SOUND, LINK_SOUNDS, SMB2_SOUNDS>
    implements SMM2SoundEffectSound<SOUNDS, EDITOR_SOUND, LINK_SOUNDS, SMB2_SOUNDS> {

    //region -------------------- Fields --------------------

    readonly #linkSounds
    readonly #smb2Sounds

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(sounds: SOUNDS, editorSound: EDITOR_SOUND, linkSounds: LINK_SOUNDS, smb2Sounds: SMB2_SOUNDS,) {
        super(sounds, editorSound,)
        this.#linkSounds = linkSounds
        this.#smb2Sounds = smb2Sounds
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public override get linkSounds(): LINK_SOUNDS {
        return this.#linkSounds
    }

    public override get smb2Sounds(): SMB2_SOUNDS {
        return this.#smb2Sounds
    }

    //endregion -------------------- Getter methods --------------------

}