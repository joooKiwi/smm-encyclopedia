import type {EditorVoiceSound, PossibleSoundReceivedOnFactory} from 'core/editorVoice/EditorVoiceSound'

import {EditorVoiceSoundRegionalContainer}          from 'core/editorVoice/EditorVoiceSound.regional.container'
import {EditorVoiceSoundSingleContainer}            from 'core/editorVoice/EditorVoiceSound.single.container'
import {EmptyEditorVoiceSound}                      from 'core/editorVoice/EmptyEditorVoiceSound'
import {EditorVoiceSoundFileContainer as SoundFile} from 'core/editorVoice/file/EditorVoiceSoundFile.container'

/**
 * @factory
 */
export class EditorVoiceSoundFactory {

    private constructor() {
        throw new TypeError('This class cannot be instantiated.')
    }

    /**
     * Create a new {@link EditorVoiceSound editor voice sound} container
     * depending on the values received.
     *
     * @param sound a single or double {@link EditorVoiceSoundHolder editor voice sound holder} or <i>null</i>.
     */
    public static create(sound: PossibleSoundReceivedOnFactory,): EditorVoiceSound {
        return sound == null
            ? EmptyEditorVoiceSound.get
            : sound instanceof Array
                ? new EditorVoiceSoundRegionalContainer(new SoundFile(sound[0].fileName), new SoundFile(sound[1].fileName),)
                : new EditorVoiceSoundSingleContainer(new SoundFile(sound.fileName),)
    }

}
