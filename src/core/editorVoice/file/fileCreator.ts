import type {EditorVoiceSoundFile} from 'core/editorVoice/file/EditorVoiceSoundFile'
import type {PossibleFileName}     from 'core/editorVoice/sound/EditorVoiceSound.types'

import {NonRepeatableSoundFileContainer} from 'util/file/sound/NonRepeatableSoundFile.container'

/**
 * Create a simple {@link EditorVoiceSoundFile} from a {@link name} provided
 *
 * @param name The image name
 */
export function editorVoiceSound<const NAME extends PossibleFileName, >(name: NAME,): EditorVoiceSoundFile<NAME> {
    return new NonRepeatableSoundFileContainer('editor voice', name, 'wav',)
}
