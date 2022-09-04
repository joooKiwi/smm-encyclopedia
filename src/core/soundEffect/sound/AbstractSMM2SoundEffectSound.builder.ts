import type {PossibleValueOnLinkOrSMB2Value_SMM2, SMM2SoundEffectSound}                from './SMM2SoundEffectSound';
import type {PossibleSoundEffectSoundFileName_SMM2, PossibleSoundEffectSoundName_SMM2} from './types';

import {AbstractExclusiveSoundEffectSoundBuilder, type SingleIndex} from './AbstractExclusiveSoundEffectSound.builder';
import {EMPTY_ARRAY}                                           from '../../../util/emptyVariables';

export abstract class AbstractSMM2SoundEffectSoundBuilder<T extends SMM2SoundEffectSound, SOUND extends PossibleSoundEffectSoundName_SMM2, FILE_SOUND extends PossibleSoundEffectSoundFileName_SMM2, >
    extends AbstractExclusiveSoundEffectSoundBuilder<T, SOUND, FILE_SOUND> {

    //region -------------------- Fields --------------------

    #linkSoundsIndex?: SingleIndex[];
    #smb2SoundsIndex?: SingleIndex[];

    //endregion -------------------- Fields --------------------

    protected constructor(sounds: readonly SOUND[]) {
        super(sounds,);
    }

    //region -------------------- Getter methods --------------------

    protected get _linkSounds(): OriginalValuesOnLinkOrSMB2Value<SOUND> {
        return this.__getValueOnLinkOrSMB2(this.#linkSoundsIndex,);
    }

    protected get _smb2Sounds(): OriginalValuesOnLinkOrSMB2Value<SOUND> {
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

    private __getValueOnLinkOrSMB2(indexes: | readonly number[] | undefined,): OriginalValuesOnLinkOrSMB2Value<SOUND> {
        const sounds = this._sounds;

        return indexes == null ? EMPTY_ARRAY :
            indexes.length === 1 ? [sounds[indexes[0]],]
                : [sounds[indexes[0]], sounds[indexes[1]],];
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Builder helper methods --------------------

    protected override _createSounds(sounds: OriginalValuesOnLinkOrSMB2Value<SOUND>,): PossibleValueOnLinkOrSMB2Value_SMM2<readonly FILE_SOUND[]>
    protected override _createSounds(sounds: readonly SOUND[],): readonly FILE_SOUND[] {
        return sounds.map(sound => this._createSound(sound));
    }

    //endregion -------------------- Builder helper methods --------------------

}

export type OriginalValuesOnLinkOrSMB2Value<NAME extends PossibleSoundEffectSoundName_SMM2, > = | readonly [] | readonly [NAME,] | readonly [NAME, NAME,];
