import type {EditorVoiceSoundFile}                                           from 'core/editorVoice/file/EditorVoiceSoundFile'
import type {EditorVoiceSoundFileHolder}                                     from 'core/editorVoice/holder/sound/EditorVoiceSoundFileHolder'
import type {PossibleFileName, PossibleStartingName_WithEuropeanAlternative} from 'core/editorVoice/holder/sound/EditorVoiceSoundFileHolder.types'
import type {NullOr}                                                         from 'util/types/nullable'

export abstract class AbstractEditorVoiceSoundFileHolder<REGULAR_SOUND_FILE extends EditorVoiceSoundFile<PossibleFileName>,
    EUROPEAN_SOUND_FILE extends NullOr<EditorVoiceSoundFile<PossibleFileName<PossibleStartingName_WithEuropeanAlternative[1], never>>>, >
    implements EditorVoiceSoundFileHolder {

    //region -------------------- Fields --------------------

    readonly #regularSoundFile: REGULAR_SOUND_FILE
    readonly #europeanSoundFile: EUROPEAN_SOUND_FILE
    readonly #soundFiles: readonly NonNullable<| REGULAR_SOUND_FILE | EUROPEAN_SOUND_FILE>[]

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(regularSoundFile: REGULAR_SOUND_FILE, europeanSoundFile: EUROPEAN_SOUND_FILE,) {
        this.#regularSoundFile = regularSoundFile
        this.#europeanSoundFile = europeanSoundFile
        this.#soundFiles = [regularSoundFile, europeanSoundFile,].filter((it): it is NonNullable<| REGULAR_SOUND_FILE | EUROPEAN_SOUND_FILE> => it != null)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get regularSoundFile(): REGULAR_SOUND_FILE {
        return this.#regularSoundFile
    }

    public get europeanSoundFile(): EUROPEAN_SOUND_FILE {
        return this.#europeanSoundFile
    }

    public get soundFiles(): readonly NonNullable<REGULAR_SOUND_FILE | EUROPEAN_SOUND_FILE>[] {
        return this.#soundFiles
    }

    //endregion -------------------- Getter methods --------------------

}
