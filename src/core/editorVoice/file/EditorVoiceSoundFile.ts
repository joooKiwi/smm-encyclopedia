import type {PossibleFileName, PossibleFileName_WithVoiceBefore, PossibleStartingName_WithEuropeanAlternative} from 'core/editorVoice/sound/EditorVoiceSound.types'
import type {NonRepeatableSoundFile}                                                                           from 'util/file/sound/NonRepeatableSoundFile'

/**
 * A {@link NonRepeatableSoundFile} made to be related to an {@link EditorVoices}
 *
 * @see RegularEditorVoiceSoundFile
 * @see EuropeanEditorVoiceSoundFile
 */
export type EditorVoiceSoundFile<NAME extends PossibleFileName = PossibleFileName, > = NonRepeatableSoundFile<'editor voice', NAME, 'wav'>

/** A {@link EditorVoiceSoundFile} made to be related to an {@link EditorVoices} having a regular sound */
export type RegularEditorVoiceSoundFile<NAME extends PossibleFileName = PossibleFileName, >
    = EditorVoiceSoundFile<NAME>

/** A {@link EditorVoiceSoundFile} made to be related to an {@link EditorVoices} having a european sound */
export type EuropeanEditorVoiceSoundFile<NAME extends PossibleFileName_WithVoiceBefore<PossibleStartingName_WithEuropeanAlternative[1]> = PossibleFileName_WithVoiceBefore<PossibleStartingName_WithEuropeanAlternative[1]>, >
    = EditorVoiceSoundFile<NAME>
