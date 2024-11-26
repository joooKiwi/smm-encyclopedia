import type {PossibleFileName_WithSingingPartBefore, PossibleFileName_WithVoiceBefore, PossibleStartingName_WithEuropeanAlternative, PossibleStartingName_WithSingingPartBefore, PossibleStartingName_WithVoiceBefore} from 'core/editorVoice/sound/EditorVoiceSound.types'
import type {EditorVoiceSound}                                                                                                                                                                                         from 'core/editorVoice/sound/EditorVoiceSound'
import type {EditorVoiceSoundFile, EuropeanEditorVoiceSoundFile, RegularEditorVoiceSoundFile}                                                                                                                          from 'core/editorVoice/file/EditorVoiceSoundFile'

import {editorVoiceSound}       from 'core/editorVoice/file/fileCreator'
import {DoubleEditorVoiceSound} from 'core/editorVoice/sound/DoubleEditorVoiceSound'
import {SingleEditorVoiceSound} from 'core/editorVoice/sound/SingleEditorVoiceSound'

/**
 * Create an {@link EditorVoiceSound} with the {@link PossibleFileName_WithSingingPartBefore "signing part"} before its {@link fileName}
 *
 * @param fileName The file name
 */
export function singleEditorVoiceWithSigningPart<const FILE_NAME extends PossibleStartingName_WithSingingPartBefore, >(fileName: FILE_NAME,): EditorVoiceSound<readonly [EditorVoiceSoundFile<PossibleFileName_WithSingingPartBefore<FILE_NAME>>,], EditorVoiceSoundFile<PossibleFileName_WithSingingPartBefore<FILE_NAME>>, null> {
    return new SingleEditorVoiceSound(editorVoiceSound(`se_ui_singingparts_${fileName}`,),)
}

/**
 * Create an {@link EditorVoiceSound} with the {@link PossibleFileName_WithVoiceBefore "voice"} before its {@link fileName}
 *
 * @param fileName The file name
 */
export function singleEditorVoiceWithVoice<const FILE_NAME extends PossibleStartingName_WithVoiceBefore, >(fileName: FILE_NAME,): EditorVoiceSound<readonly [EditorVoiceSoundFile<PossibleFileName_WithVoiceBefore<FILE_NAME>>,], EditorVoiceSoundFile<PossibleFileName_WithVoiceBefore<FILE_NAME>>, null> {
    return new SingleEditorVoiceSound(editorVoiceSound(`voice_${fileName}`,),)
}

/**
 * Create an  {@link EditorVoiceSound} with the {@link PossibleFileName_WithVoiceBefore "voice"} before both {@link regularFileName} and {@link europeanFileName}
 *
 * @param regularFileName The regular file name
 * @param europeanFileName The european file name
 */
export function doubleEditorVoiceWithVoice<const REGULAR_FILE_NAME extends PossibleStartingName_WithEuropeanAlternative[0], const EUROPEAN_FILE_NAME extends PossibleStartingName_WithEuropeanAlternative[1], >(regularFileName: REGULAR_FILE_NAME, europeanFileName: EUROPEAN_FILE_NAME,): EditorVoiceSound<readonly [RegularEditorVoiceSoundFile<PossibleFileName_WithVoiceBefore<REGULAR_FILE_NAME>>, EuropeanEditorVoiceSoundFile<PossibleFileName_WithVoiceBefore<EUROPEAN_FILE_NAME>>,], RegularEditorVoiceSoundFile<PossibleFileName_WithVoiceBefore<REGULAR_FILE_NAME>>, EuropeanEditorVoiceSoundFile<PossibleFileName_WithVoiceBefore<EUROPEAN_FILE_NAME>>> {
    return new DoubleEditorVoiceSound(editorVoiceSound(`voice_${regularFileName}`,), editorVoiceSound(`voice_${europeanFileName}`,),)
}
