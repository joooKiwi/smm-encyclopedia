import type {ObjectHolder}                                            from '../../../util/holder/ObjectHolder';
import type {PossibleEditorValue_SMM1, SMM1ExclusiveSoundEffectSound} from './SMM1ExclusiveSoundEffectSound';
import type {PossibleSoundEffectSoundFileName_SMM1}                   from './types';

import {AbstractSoundEffectSound} from './AbstractSoundEffectSound';
import {EMPTY_ARRAY}              from '../../../util/emptyVariables';

export class SMM1ExclusiveSoundEffectSoundContainer<SOUNDS extends readonly PossibleSoundEffectSoundFileName_SMM1[], EDITOR_SOUNDS extends PossibleEditorValue_SMM1<SOUNDS>, >
    extends AbstractSoundEffectSound<SOUNDS, EDITOR_SOUNDS, readonly [], readonly []>
    implements SMM1ExclusiveSoundEffectSound<SOUNDS, EDITOR_SOUNDS> {

    public constructor(sounds: ObjectHolder<SOUNDS>, editorSound: ObjectHolder<EDITOR_SOUNDS>,) {
        super(sounds, editorSound,);
    }

    public override readonly linkSounds = EMPTY_ARRAY;
    public override readonly smb2Sounds = EMPTY_ARRAY;

}
