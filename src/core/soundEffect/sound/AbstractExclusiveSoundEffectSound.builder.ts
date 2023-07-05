import type {Lazy} from '@joookiwi/lazy'
import {lazy}      from '@joookiwi/lazy'

import type {PossibleSoundEffectSoundName} from 'core/soundEffect/sound/types'
import type {SoundEffectSound}             from 'core/soundEffect/sound/SoundEffectSound'
import type {SoundEffectSoundFile}         from 'core/soundEffect/file/SoundEffectSoundFile'
import type {Builder}                      from 'util/builder/Builder'

export abstract class AbstractExclusiveSoundEffectSoundBuilder<T extends SoundEffectSound, SOUND extends PossibleSoundEffectSoundName, FILE_SOUND extends SoundEffectSoundFile, >
    implements Builder<T> {

    //region -------------------- Fields --------------------

    readonly #sounds

    #editorSoundIndex?: SingleIndex

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(sounds: readonly SOUND[],) {
        this.#sounds = sounds
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    protected get _sounds(): readonly SOUND[] {
        return this.#sounds
    }

    private get __editorSound(): SOUND {
        return this._sounds[this.#editorSoundIndex ?? 0]
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public editor(value: SingleIndex,): this {
        this.#editorSoundIndex = value - 1
        return this
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Builder helper methods --------------------

    protected abstract _createSound(sound: SOUND,): FILE_SOUND

    protected _createSounds(sounds: readonly SOUND[],): readonly FILE_SOUND[] {
        return sounds.map(sound => this._createSound(sound,))
    }

    //endregion -------------------- Builder helper methods --------------------

    protected abstract _build(sounds: Lazy<readonly FILE_SOUND[]>, editorSound: Lazy<FILE_SOUND>,): T

    public build(): T {
        return this._build(
            lazy(() => this._createSounds(this._sounds,),),
            lazy(() => this._createSound(this.__editorSound,),),
        )
    }

}

export type SingleIndex = number
