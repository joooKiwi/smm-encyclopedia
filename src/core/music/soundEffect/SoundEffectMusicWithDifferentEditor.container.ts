import type {MusicSoundFile}                                                                                                                        from '../file/MusicSoundFile'
import type {PossibleMusicArray, PossibleSoundEffectEditorOnly_EditorName, PossibleSoundEffectEditorOnly_Name, SoundEffectMusicWithDifferentEditor} from './SoundEffectMusicWithDifferentEditor'

import {AbstractSoundEffectMusic} from './AbstractSoundEffectMusic'

export class SoundEffectMusicWithDifferentEditorContainer<NAME extends MusicSoundFile<PossibleSoundEffectEditorOnly_Name>, EDITOR_NAME extends MusicSoundFile<PossibleSoundEffectEditorOnly_EditorName>, >
    extends AbstractSoundEffectMusic<PossibleMusicArray<NAME, EDITOR_NAME>, NAME, EDITOR_NAME>
    implements SoundEffectMusicWithDifferentEditor<NAME, EDITOR_NAME> {

    public constructor(name: NAME, editorName: EDITOR_NAME,) {
        super(name, editorName,)
    }

    protected override _createEveryMusics(): PossibleMusicArray<NAME, EDITOR_NAME> {
        return [this.soundEffect, this.editorSoundEffect,]
    }

}
