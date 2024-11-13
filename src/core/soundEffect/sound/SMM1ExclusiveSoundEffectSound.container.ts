import type {Array, EmptyArray} from '@joookiwi/type'

import type {PossibleEditorValue_SMM1, SMM1ExclusiveSoundEffectSound} from 'core/soundEffect/sound/SMM1ExclusiveSoundEffectSound'
import type {SMM1SoundEffectSoundFile}                                from 'core/soundEffect/file/SoundEffectSoundFile'

import {AbstractSoundEffectSound} from 'core/soundEffect/sound/AbstractSoundEffectSound'
import {EMPTY_ARRAY}              from 'util/emptyVariables'

export class SMM1ExclusiveSoundEffectSoundContainer<const SOUNDS extends Array<SMM1SoundEffectSoundFile>,
    const EDITOR_SOUNDS extends PossibleEditorValue_SMM1<SOUNDS>, >
    extends AbstractSoundEffectSound<SOUNDS, EDITOR_SOUNDS, EmptyArray, EmptyArray>
    implements SMM1ExclusiveSoundEffectSound<SOUNDS, EDITOR_SOUNDS> {

    public constructor(sounds: SOUNDS, editorSound: EDITOR_SOUNDS,) {
        super(sounds, editorSound,)
    }

    public override readonly linkSounds = EMPTY_ARRAY
    public override readonly smb2Sounds = EMPTY_ARRAY

}
