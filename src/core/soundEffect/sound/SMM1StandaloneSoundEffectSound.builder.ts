import type {SoundEffectSoundFile}           from 'core/soundEffect/file/SoundEffectSoundFile'
import type {SingleIndex}                    from 'core/soundEffect/sound/AbstractExclusiveSoundEffectSound.builder'
import type {SMM1StandaloneSoundEffectSound} from 'core/soundEffect/sound/SMM1StandaloneSoundEffectSound'
import type {SMM1ExclusiveSoundEffectSound}  from 'core/soundEffect/sound/SMM1ExclusiveSoundEffectSound'
import type {SMM2SoundEffectSound}           from 'core/soundEffect/sound/SMM2SoundEffectSound'
import type {Builder}                        from 'util/builder/Builder'
import type {NullOr}                         from 'util/types/nullable'

import {EmptySMMSoundEffectSound}                from 'core/soundEffect/sound/EmptySMMSoundEffectSound'
import {SMM1StandaloneSoundEffectSoundContainer} from 'core/soundEffect/sound/SMM1StandaloneSoundEffectSound.container'
import {ObjectHolderContainer}                   from 'util/holder/ObjectHolder.container'
import {assert}                                  from 'util/utilitiesMethods'

export class SMM1StandaloneSoundEffectSoundBuilder
    implements Builder<SMM1StandaloneSoundEffectSound> {

    //region -------------------- Fields --------------------

    readonly #smm1ExclusiveSounds
    readonly #smm2ExclusiveSounds

    #soundIndexes?: SingleSoundIndex[]
    #editorIndex?: SingleSoundIndex

    //endregion -------------------- Fields --------------------

    public constructor(smm1: SMM1ExclusiveSoundEffectSound,)
    public constructor(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,)
    public constructor(smm1: SMM1ExclusiveSoundEffectSound, smm2: NullOr<SMM2SoundEffectSound> = null,) {
        this.#smm1ExclusiveSounds = smm1
        this.#smm2ExclusiveSounds = smm2
    }

    //region -------------------- Getter methods --------------------

    protected get _smm1ExclusiveSounds(): SMM1ExclusiveSoundEffectSound {
        return this.#smm1ExclusiveSounds
    }

    protected get _smm2ExclusiveSounds(): NullOr<SMM2SoundEffectSound> {
        return this.#smm2ExclusiveSounds
    }


    protected get _soundIndexes(): NullOr<readonly SingleSoundIndex[]> {
        return this.#soundIndexes ?? null
    }

    protected get _editorIndex(): NullOr<SingleSoundIndex> {
        return this.#editorIndex ?? null
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected _addSoundIndex(...[game, singleIndex,]: SingleSoundIndex): this {
        (this.#soundIndexes ??= []).push([game, singleIndex - 1,])
        return this
    }

    public smm1(index: SingleIndex,): this {
        return this._addSoundIndex(1, index,)
    }

    public smm2(index: SingleIndex,): this {
        return this._addSoundIndex(2, index,)
    }

    public editor(...[game, singleIndex]: SingleSoundIndex): this {
        //TODO support the game only
        if (game === 1)
            this.smm1(singleIndex)
        else
            this.smm2(singleIndex)

        this.#editorIndex = [game, singleIndex - 1,]
        return this
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Builder helper methods --------------------

    protected _getSounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,): readonly SoundEffectSoundFile[] {
        const soundIndexes = this._soundIndexes
        assert(soundIndexes != null, 'The sounds require to be selected when SMM1 & SMM2 is given (at construction).',)

        return soundIndexes.map(([game, soundIndex,]) => (game === 1 ? smm1 : smm2).sounds[soundIndex])
    }

    protected _getEditorSound(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,): SoundEffectSoundFile {
        const index = this._editorIndex
        assert(index != null, 'The editor sound require to have a selected index when SMM1 & sMM2 is given (at construction).',)

        const sound = (index[0] === 1 ? smm1 : smm2).editorSound
        assert(sound != null, 'The sound cannot be null for an editor sound.',)
        return sound
    }

    protected _getSMM1EditorSound(smm1: SMM1ExclusiveSoundEffectSound,) {
        const sound = smm1.editorSound
        assert(sound != null, 'The SMM1 editor sound cannot be null for a standalone SMM1 sound effect sound.',)

        return sound
    }

    //endregion -------------------- Builder helper methods --------------------

    public build(): SMM1StandaloneSoundEffectSound {
        const smm1 = this._smm1ExclusiveSounds
        const smm2 = this._smm2ExclusiveSounds

        return smm2 == null
            ? new SMM1StandaloneSoundEffectSoundContainer(
                new ObjectHolderContainer(() => smm1.sounds),
                new ObjectHolderContainer(() => this._getSMM1EditorSound(smm1)),
                smm1,
                EmptySMMSoundEffectSound.get,
            )
            : new SMM1StandaloneSoundEffectSoundContainer(
                new ObjectHolderContainer(() => this._getSounds(smm1, smm2,)),
                new ObjectHolderContainer(() => this._getEditorSound(smm1, smm2,)),
                smm1,
                smm2,
            )
    }

}

type SingleSoundIndex = readonly [game: | 1 | 2, index: SingleIndex,]
