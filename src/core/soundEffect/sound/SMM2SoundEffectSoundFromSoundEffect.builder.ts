import type {PossibleValueOnLinkOrSMB2Value_SMM2, SMM2SoundEffectSound}                from './SMM2SoundEffectSound';
import type {PossibleSoundEffectSoundFileName_SMM2, PossibleSoundEffectSoundName_SMM2} from './types';

import {AbstractExclusiveSoundEffectSoundBuilder, type SingleIndex} from './AbstractExclusiveSoundEffectSound.builder';
import {EMPTY_ARRAY}                                                from '../../../util/emptyVariables';
import {BASE_PATH}                                                  from '../../../variables';
import {ObjectHolder}                                               from '../../../util/holder/ObjectHolder';
import {SMM2SoundEffectSoundContainer}                              from './SMM2SoundEffectSound.container';
import {DelayedObjectHolderContainer}                               from '../../../util/holder/DelayedObjectHolder.container';

export class SMM2SoundEffectSoundFromSoundEffectBuilder
    extends AbstractExclusiveSoundEffectSoundBuilder<SMM2SoundEffectSound, PossibleSoundEffectSoundName_SMM2, PossibleSoundEffectSoundFileName_SMM2> {

    //region -------------------- Fields --------------------

    #linkSoundsIndex?: SingleIndex[];
    #smb2SoundsIndex?: SingleIndex[];

    //endregion -------------------- Fields --------------------

    public constructor(sounds: readonly PossibleSoundEffectSoundName_SMM2[],)
    public constructor(...sounds: readonly PossibleSoundEffectSoundName_SMM2[])
    public constructor(...sounds: readonly (| PossibleSoundEffectSoundName_SMM2 | readonly PossibleSoundEffectSoundName_SMM2[])[]) {
        super(sounds[0] instanceof Array ? sounds[0] : sounds.flat(),);
    }

    //region -------------------- Getter methods --------------------

    private get __linkSounds(): OriginalValuesOnLinkOrSMB2Value {
        return this.__getValueOnLinkOrSMB2(this.#linkSoundsIndex,);
    }

    private get __smb2Sounds(): OriginalValuesOnLinkOrSMB2Value {
        return this.__getValueOnLinkOrSMB2(this.#smb2SoundsIndex,);
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public link(...values: SingleIndex[]): this {
        this.#linkSoundsIndex = values.map(value => value - 1);
        return this;
    }

    public smb2(...values: SingleIndex[]): this {
        this.#smb2SoundsIndex = values.map(value => value - 1);
        return this;
    }

    private __getValueOnLinkOrSMB2(indexes: | readonly number[] | undefined,): OriginalValuesOnLinkOrSMB2Value {
        const sounds = this._sounds;

        return indexes == null ? EMPTY_ARRAY :
            indexes.length === 1 ? [sounds[indexes[0]],]
                : [sounds[indexes[0]], sounds[indexes[1]],];
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Builder helper methods --------------------

    protected override _createSound(sound: PossibleSoundEffectSoundName_SMM2,): PossibleSoundEffectSoundFileName_SMM2 {
        return `/${BASE_PATH}/sound/sound effect/SMM2/${sound}.wav`;
    }

    protected override _createSounds(sounds: OriginalValuesOnLinkOrSMB2Value,): PossibleValueOnLinkOrSMB2Value_SMM2<readonly PossibleSoundEffectSoundFileName_SMM2[]>
    protected override _createSounds(sounds: readonly PossibleSoundEffectSoundName_SMM2[],): readonly PossibleSoundEffectSoundFileName_SMM2[] {
        return sounds.map(sound => this._createSound(sound));
    }

    //endregion -------------------- Builder helper methods --------------------

    protected override _build(sounds: ObjectHolder<readonly PossibleSoundEffectSoundFileName_SMM2[]>, editorSound: ObjectHolder<PossibleSoundEffectSoundFileName_SMM2>,): SMM2SoundEffectSound {
        return new SMM2SoundEffectSoundContainer(
            sounds,
            editorSound,
            new DelayedObjectHolderContainer(() => this._createSounds(this.__linkSounds,)),
            new DelayedObjectHolderContainer(() => this._createSounds(this.__smb2Sounds,)),
        );
    }

}

type OriginalValuesOnLinkOrSMB2Value = | readonly [] | readonly [PossibleSoundEffectSoundName_SMM2,] | readonly [PossibleSoundEffectSoundName_SMM2, PossibleSoundEffectSoundName_SMM2,];
