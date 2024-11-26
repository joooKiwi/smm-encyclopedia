import type {EditorVoiceSoundFile} from 'core/editorVoice/file/EditorVoiceSoundFile'
import type {PossibleFileName}     from 'core/editorVoice/sound/EditorVoiceSound.types'

import {NonRepeatableInternalSoundFileContainer} from 'util/file/sound/NonRepeatableInternalSoundFile.container'

/**
 * Create an {@link EditorVoiceSoundFile} from a {@link name} provided
 *
 * @param name The image name
 */
export function editorVoiceSound<const NAME extends PossibleFileName, >(name: NAME,): EditorVoiceSoundFile<NAME> {
    return new NonRepeatableInternalSoundFileContainer('editor voice', name, 'wav',)
}
