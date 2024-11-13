import type {NullOr} from '@joookiwi/type'

import type {PossibleSoundFileExtension, SoundFile} from 'util/file/sound/SoundFile'
import type {RepeatableTypes}                       from 'util/file/sound/RepeatableTypes'
import type {Time}                                  from 'util/file/sound/time/Time'

import {AbstractInternalFile} from 'util/file/AbstractInternalFile'

/** The base of every "internal" {@link SoundFile} implementations */
export abstract class AbstractInternalSoundFile<const out PATH extends string = string,
    const out NAME extends string = string,
    const out EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension,
    const out REPEATABLE_TIME extends NullOr<Time> = NullOr<Time>, >
    extends AbstractInternalFile<PATH, NAME, EXTENSION>
    implements SoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {

    //region -------------------- Fields --------------------

    readonly #repeatableTime: REPEATABLE_TIME//FIXME this type is only there to help typescript (it's not the standard)

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(path: PATH, name: NAME, extension: EXTENSION, repeatableTime: REPEATABLE_TIME,) {
        super(path, name, extension,)
        this.#repeatableTime = repeatableTime
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    protected override _createKey(): string {
        return `${this.fullName} (${this.repeatableType.simpleName})`
    }

    public get repeatableTime(): REPEATABLE_TIME {
        return this.#repeatableTime
    }

    public abstract get repeatableType(): RepeatableTypes

    //endregion -------------------- Getter methods --------------------

}
