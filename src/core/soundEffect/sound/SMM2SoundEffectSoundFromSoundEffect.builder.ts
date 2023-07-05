import type {Lazy} from '@joookiwi/lazy'
import {lazy}      from '@joookiwi/lazy'

import type {SMM2SoundEffectSoundFile}                                  from 'core/soundEffect/file/SMM2SoundEffectSoundFile'
import type {PossibleValueOnLinkOrSMB2Value_SMM2, SMM2SoundEffectSound} from 'core/soundEffect/sound/SMM2SoundEffectSound'
import type {PossibleSoundEffectSoundName_SMM2}                         from 'core/soundEffect/sound/types'
import type {EmptyArray}                                                from 'util/types/variables'

import {SMM2SoundEffectSoundFileContainer}                          from 'core/soundEffect/file/SMM2SoundEffectSoundFile.container'
import {AbstractExclusiveSoundEffectSoundBuilder, type SingleIndex} from 'core/soundEffect/sound/AbstractExclusiveSoundEffectSound.builder'
import {SMM2SoundEffectSoundContainer}                              from 'core/soundEffect/sound/SMM2SoundEffectSound.container'
import {EMPTY_ARRAY}                                                from 'util/emptyVariables'

export class SMM2SoundEffectSoundFromSoundEffectBuilder
    extends AbstractExclusiveSoundEffectSoundBuilder<SMM2SoundEffectSound, PossibleSoundEffectSoundName_SMM2, SMM2SoundEffectSoundFile> {

    //region -------------------- Fields --------------------

    #linkSoundsIndex?: SingleIndex[]
    #smb2SoundsIndex?: SingleIndex[]

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(sounds: readonly PossibleSoundEffectSoundName_SMM2[],)
    public constructor(...sounds: readonly PossibleSoundEffectSoundName_SMM2[])
    public constructor(...sounds: readonly (| PossibleSoundEffectSoundName_SMM2 | readonly PossibleSoundEffectSoundName_SMM2[])[]) {
        super(sounds[0] instanceof Array ? sounds[0] : sounds.flat(),)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    private get __linkSounds(): OriginalValuesOnLinkOrSMB2Value {
        return this.__getValueOnLinkOrSMB2(this.#linkSoundsIndex,)
    }

    private get __smb2Sounds(): OriginalValuesOnLinkOrSMB2Value {
        return this.__getValueOnLinkOrSMB2(this.#smb2SoundsIndex,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public link(...values: SingleIndex[]): this {
        this.#linkSoundsIndex = values.map(value => value - 1)
        return this
    }

    public smb2(...values: SingleIndex[]): this {
        this.#smb2SoundsIndex = values.map(value => value - 1)
        return this
    }

    private __getValueOnLinkOrSMB2(indexes: | readonly number[] | undefined,): OriginalValuesOnLinkOrSMB2Value {
        const sounds = this._sounds

        return indexes == null ? EMPTY_ARRAY :
            indexes.length === 1 ? [sounds[indexes[0]],]
                : [sounds[indexes[0]], sounds[indexes[1]],]
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Builder helper methods --------------------

    protected override _createSound(sound: PossibleSoundEffectSoundName_SMM2,): SMM2SoundEffectSoundFile {
        return new SMM2SoundEffectSoundFileContainer(sound,)
    }

    protected override _createSounds(sounds: OriginalValuesOnLinkOrSMB2Value,): PossibleValueOnLinkOrSMB2Value_SMM2
    protected override _createSounds(sounds: readonly PossibleSoundEffectSoundName_SMM2[],): readonly SMM2SoundEffectSoundFile[] {
        return sounds.map(sound => this._createSound(sound))
    }

    //endregion -------------------- Builder helper methods --------------------

    protected override _build(sounds: Lazy<readonly SMM2SoundEffectSoundFile[]>, editorSound: Lazy<SMM2SoundEffectSoundFile>,): SMM2SoundEffectSound {
        return new SMM2SoundEffectSoundContainer(
            sounds,
            editorSound,
            lazy(() => this._createSounds(this.__linkSounds,),),
            lazy(() => this._createSounds(this.__smb2Sounds,),),
        )
    }

}

type OriginalValuesOnLinkOrSMB2Value = | EmptyArray
                                       | readonly [PossibleSoundEffectSoundName_SMM2,]
                                       | readonly [PossibleSoundEffectSoundName_SMM2, PossibleSoundEffectSoundName_SMM2,]
