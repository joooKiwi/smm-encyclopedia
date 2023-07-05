import type {Lazy} from '@joookiwi/lazy'

import type {PossibleEditorValue_SMM1, SMM1ExclusiveSoundEffectSound} from 'core/soundEffect/sound/SMM1ExclusiveSoundEffectSound'
import type {SMM1SoundEffectSoundFile}                                from 'core/soundEffect/file/SMM1SoundEffectSoundFile'
import type {EmptyArray}                                              from 'util/types/variables'

import {AbstractSoundEffectSound} from 'core/soundEffect/sound/AbstractSoundEffectSound'
import {EMPTY_ARRAY}              from 'util/emptyVariables'

export class SMM1ExclusiveSoundEffectSoundContainer<SOUNDS extends readonly SMM1SoundEffectSoundFile[], EDITOR_SOUNDS extends PossibleEditorValue_SMM1<SOUNDS>, >
    extends AbstractSoundEffectSound<SOUNDS, EDITOR_SOUNDS, EmptyArray, EmptyArray>
    implements SMM1ExclusiveSoundEffectSound<SOUNDS, EDITOR_SOUNDS> {

    public constructor(sounds: Lazy<SOUNDS>, editorSound: Lazy<EDITOR_SOUNDS>,) {
        super(sounds, editorSound,)
    }

    public override readonly linkSounds = EMPTY_ARRAY
    public override readonly smb2Sounds = EMPTY_ARRAY

}
