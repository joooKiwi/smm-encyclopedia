import type {Builder}                      from '../../../util/builder/Builder'
import type {ObjectHolder}                 from '../../../util/holder/ObjectHolder'
import type {PossibleSoundEffectSoundName} from './types'
import type {SoundEffectSound}             from './SoundEffectSound'
import type {SoundEffectSoundFile}         from '../file/SoundEffectSoundFile'

import {DelayedObjectHolderContainer} from '../../../util/holder/DelayedObjectHolder.container'

export abstract class AbstractExclusiveSoundEffectSoundBuilder<T extends SoundEffectSound, SOUND extends PossibleSoundEffectSoundName, FILE_SOUND extends SoundEffectSoundFile, >
    implements Builder<T> {

    //region -------------------- Fields --------------------

    readonly #sounds

    #editorSoundIndex?: SingleIndex

    //endregion -------------------- Fields --------------------

    protected constructor(sounds: readonly SOUND[]) {
        this.#sounds = sounds
    }

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

    protected abstract _build(sounds: ObjectHolder<readonly FILE_SOUND[]>, editorSound: ObjectHolder<FILE_SOUND>,): T

    public build(): T {
        return this._build(
            new DelayedObjectHolderContainer(() => this._createSounds(this._sounds)),
            new DelayedObjectHolderContainer(() => this._createSound(this.__editorSound)),
        )
    }

}

export type SingleIndex = number