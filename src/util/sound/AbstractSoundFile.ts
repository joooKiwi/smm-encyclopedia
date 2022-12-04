import type {NullOr}                                           from 'types/nullable'
import type {FullName, FullPath, PossibleExtension, SoundFile} from 'util/sound/SoundFile'
import type {RepeatableTypes}                                  from 'util/sound/RepeatableTypes'
import type {Time}                                             from 'util/sound/time/Time'

import {BASE_PATH} from 'variables'

export abstract class AbstractSoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, REPEATABLE_TIME extends NullOr<Time> = NullOr<Time>, >
    implements SoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {

    //region -------------------- Fields --------------------

    #key?: string
    readonly #path
    #fullPath?: FullPath<PATH>
    readonly #name
    #fullName?: FullName<PATH, NAME, EXTENSION>
    readonly #extension

    readonly #repeatableTime: REPEATABLE_TIME//FIXME this type is only there to help typescript (it's not the standard)

    //endregion -------------------- Fields --------------------

    protected constructor(path: PATH, name: NAME, extension: EXTENSION, repeatableTime: REPEATABLE_TIME,) {
        this.#path = path
        this.#name = name
        this.#extension = extension
        this.#repeatableTime = repeatableTime
    }

    //region -------------------- Getter methods --------------------

    public get key(): string {
        return this.#key ??= `${this.fullName} (${this.repeatableType.simpleName})`
    }

    public get path(): PATH {
        return this.#path
    }

    public get fullPath(): FullPath<PATH> {
        return this.#fullPath ??= `/${BASE_PATH}/${this.path}`
    }

    public get name(): NAME {
        return this.#name
    }

    public get fullName(): FullName<PATH, NAME, EXTENSION> {
        return this.#fullName ??= `${this.fullPath}/${this.name}.${this.extension}`
    }

    public get extension(): EXTENSION {
        return this.#extension
    }


    public get repeatableTime(): REPEATABLE_TIME {
        return this.#repeatableTime
    }

    public abstract get repeatableType(): RepeatableTypes

    //endregion -------------------- Getter methods --------------------

}
