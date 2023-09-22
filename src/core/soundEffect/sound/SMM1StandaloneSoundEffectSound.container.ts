import type {SoundEffectSoundFile}           from 'core/soundEffect/file/SoundEffectSoundFile'
import type {SMM1ExclusiveSoundEffectSound}  from 'core/soundEffect/sound/SMM1ExclusiveSoundEffectSound'
import type {SMM1StandaloneSoundEffectSound} from 'core/soundEffect/sound/SMM1StandaloneSoundEffectSound'
import type {SMM2SoundEffectSound}           from 'core/soundEffect/sound/SMM2SoundEffectSound'
import type {PossibleEditorValue}            from 'core/soundEffect/sound/SoundEffectSound'

import {AbstractSoundEffectSound} from 'core/soundEffect/sound/AbstractSoundEffectSound'
import {EMPTY_ARRAY}              from 'util/emptyVariables'

export class SMM1StandaloneSoundEffectSoundContainer<const out SOUNDS extends readonly SoundEffectSoundFile[],
    const out EDITOR_SOUND extends PossibleEditorValue<SOUNDS>, >
    extends AbstractSoundEffectSound<SOUNDS, EDITOR_SOUND, EmptyArray, EmptyArray>
    implements SMM1StandaloneSoundEffectSound<SOUNDS, EDITOR_SOUND> {

    //region -------------------- Fields --------------------

    readonly #exclusiveSMM1Sounds
    readonly #exclusiveSMM2Sounds

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------


    public constructor(sounds: SOUNDS, editorSound: EDITOR_SOUND,
                       smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
        super(sounds, editorSound,)
        this.#exclusiveSMM1Sounds = smm1
        this.#exclusiveSMM2Sounds = smm2
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public override readonly linkSounds = EMPTY_ARRAY
    public override readonly smb2Sounds = EMPTY_ARRAY


    public get exclusiveSMM1Sounds(): SMM1ExclusiveSoundEffectSound {
        return this.#exclusiveSMM1Sounds
    }

    public get exclusiveSMM2Sounds(): SMM2SoundEffectSound {
        return this.#exclusiveSMM2Sounds
    }

    //endregion -------------------- Getter methods --------------------

}
