import type {SingleBackgroundMusic}                                      from 'core/music/backgroundMusic/SingleBackgroundMusic'
import type {ClassWithNullObjectPattern, EmptySingleBackgroundMusicName} from 'util/ClassWithNullObjectPattern'

import {Empty} from 'util/emptyVariables'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY

/**
 * @singleton
 * @deprecated The use of {@link Tracks} should be used instead
 */
export class EmptySingleBackgroundMusic
    implements SingleBackgroundMusic<null, null, null, null, null>,
        ClassWithNullObjectPattern<EmptySingleBackgroundMusicName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptySingleBackgroundMusic

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly all = EMPTY_ARRAY

    public readonly smb = null
    public readonly smb3 = null
    public readonly smw = null
    public readonly nsmbu = null
    public readonly sm3dw = null


    public toString(): EmptySingleBackgroundMusicName {
        return 'Empty single "background music"'
    }
}
