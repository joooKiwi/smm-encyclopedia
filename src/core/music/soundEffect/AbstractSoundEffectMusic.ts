import type {PossibleSoundEffectMusicEditorName, PossibleSoundEffectMusicName, SoundEffectMusic} from './SoundEffectMusic';
import type {FullMusicPathOn, PossibleMusicArray}                                                from '../Music';

import {AbstractMusic}                from '../AbstractMusic';
import {createMusicPathOn}            from '../createMusicPathOn';
import {DelayedObjectHolderContainer} from '../../../util/holder/DelayedObjectHolder.container';

export abstract class AbstractSoundEffectMusic<ALL extends PossibleMusicArray, SOUND_EFFECT extends PossibleSoundEffectMusicName, EDITOR_SOUND_EFFECT extends PossibleSoundEffectMusicEditorName, >
    extends AbstractMusic<ALL>
    implements SoundEffectMusic<ALL, SOUND_EFFECT, EDITOR_SOUND_EFFECT> {

    //region -------------------- Fields --------------------

    readonly #soundEffectHolder;
    readonly #editorSoundEffectHolder;

    //endregion -------------------- Fields --------------------

    protected constructor(name: SOUND_EFFECT, editorName: EDITOR_SOUND_EFFECT,) {
        super();
        this.#soundEffectHolder = new DelayedObjectHolderContainer(() => createMusicPathOn(name));
        this.#editorSoundEffectHolder = new DelayedObjectHolderContainer(() => createMusicPathOn(editorName));
    }

    //region -------------------- Getter methods --------------------

    public get soundEffect(): FullMusicPathOn<SOUND_EFFECT> {
        return this.#soundEffectHolder.get;
    }

    public get editorSoundEffect(): FullMusicPathOn<EDITOR_SOUND_EFFECT> {
        return this.#editorSoundEffectHolder.get;
    }

    //endregion -------------------- Getter methods --------------------

}
