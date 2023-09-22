import type {EditorImage}                                      from 'core/entity/images/editor/EditorImage'
import type {ClassWithNullObjectPattern, EmptyEditorImageName} from 'util/ClassWithNullObjectPattern'

import {EMPTY_ARRAY, EMPTY_MAP} from 'util/emptyVariables'

/**
 * @singleton
 */
export class EmptyEditorImage
    implements EditorImage<never>, ClassWithNullObjectPattern<EmptyEditorImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEditorImage

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly all = EMPTY_ARRAY
    public readonly map = EMPTY_MAP
    public get(): EmptyArray {
        return EMPTY_ARRAY
    }

    public toString(): EmptyEditorImageName {
        return 'Empty editor image'
    }

}
