import type {PossibleMusicArray, PossibleSoundEffectEditorOnly_EditorName, PossibleSoundEffectEditorOnly_Name, SoundEffectMusicWithDifferentEditor} from './SoundEffectMusicWithDifferentEditor';

import {AbstractSoundEffectMusic} from './AbstractSoundEffectMusic';

export class SoundEffectMusicWithDifferentEditorContainer<NAME extends PossibleSoundEffectEditorOnly_Name, EDITOR_NAME extends PossibleSoundEffectEditorOnly_EditorName>
    extends AbstractSoundEffectMusic<PossibleMusicArray<NAME, EDITOR_NAME>, NAME, EDITOR_NAME>
    implements SoundEffectMusicWithDifferentEditor<NAME, EDITOR_NAME> {

    public constructor(name: NAME, editorName: EDITOR_NAME,) {
        super(name, editorName,);
    }

    protected override _createEveryMusics(): PossibleMusicArray<NAME, EDITOR_NAME> {
        return [this.soundEffect, this.editorSoundEffect,];
    }

}
