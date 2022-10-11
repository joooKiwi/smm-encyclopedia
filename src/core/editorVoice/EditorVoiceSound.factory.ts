import type {EditorVoiceSound, PossibleSoundReceivedOnFactory} from './EditorVoiceSound'

import {EditorVoiceSoundFileContainer as SoundFile} from './file/EditorVoiceSoundFile.container'
import {EditorVoiceSoundRegionalContainer}          from './EditorVoiceSound.regional.container'
import {EditorVoiceSoundSingleContainer}            from './EditorVoiceSound.single.container'
import {EmptyEditorVoiceSound}                      from './EmptyEditorVoiceSound'

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
