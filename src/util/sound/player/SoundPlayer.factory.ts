import type {SoundFile} from '../SoundFile'

import {AbstractSoundPlayer} from './AbstractSoundPlayer'
import {SimpleSoundPlayer}   from './SimpleSoundPlayer'

export class SoundPlayerFactory {

    /**
     * Create a simple sound player
     *
     * @param source The source of the audio element
     * @param title The title displayed for the audio element
     * @param doesLoop The audio element loop (by default false)
     */
    public static createSimple<SOURCE extends SoundFile = SoundFile, TITLE extends string = string, DOES_LOOP extends boolean = false, >(source: SOURCE, title: TITLE, doesLoop?: | DOES_LOOP | null | undefined,) {
        return new SimpleSoundPlayer(source, title, doesLoop ?? AbstractSoundPlayer.DEFAULT_DOES_LOOP,)
    }

}
