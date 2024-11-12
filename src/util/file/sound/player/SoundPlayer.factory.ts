import type {SoundFile} from 'util/file/sound/SoundFile'

import {AbstractSoundPlayer} from 'util/file/sound/player/AbstractSoundPlayer'
import {SimpleSoundPlayer}   from 'util/file/sound/player/SimpleSoundPlayer'

export class SoundPlayerFactory {

    /**
     * Create a sound player
     *
     * @param source The source of the audio element
     * @param title The title displayed for the audio element
     * @param doesLoop The audio element loop (by default false)
     */
    public static createSimple<const SOURCE extends SoundFile = SoundFile, const TITLE extends string = string, const DOES_LOOP extends boolean = false, >(source: SOURCE, title: TITLE, doesLoop?: Nullable<DOES_LOOP>,) {
        return new SimpleSoundPlayer(source, title, doesLoop ?? AbstractSoundPlayer.DEFAULT_DOES_LOOP,)
    }

}
