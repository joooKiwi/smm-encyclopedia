import type {Musics}         from '../music/Musics';
import type {MusicSoundFile} from '../music/file/MusicSoundFile';

import {assert}      from '../../util/utilitiesMethods';
import {EMPTY_ARRAY} from '../../util/emptyVariables';

/**
 * @todo find a better implementation than using only this (this works for now, but is not-efficient)
 */
export class SoundEffectFromMusicAdaptor {

    //region -------------------- Fields --------------------

    readonly #musicContainer;

    //endregion -------------------- Fields --------------------

    public constructor({music,}: Musics,) {
        assert(music != null, 'The music should never ne null when referencing it from a "Sound effect" adaptor.',);
        this.#musicContainer = music;
    }

    //region -------------------- Getter methods --------------------

    public get sounds(): readonly MusicSoundFile[] {
        return this.#musicContainer.everyMusics;
    }

    // public get editorSound(): PossibleSoundEffectMusicEditorName {
    //     return this.#musicContainer.editorSoundEffect as PossibleSoundEffectMusicEditorName;
    // }

    public readonly editorSound = null;
    public readonly linkSounds = EMPTY_ARRAY;
    public readonly smb2Sounds = EMPTY_ARRAY;

    //endregion -------------------- Getter methods --------------------

}
