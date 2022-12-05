import type {EditorImage}                                      from 'core/entity/images/editor/EditorImage'
import type {ClassWithNullObjectPattern, EmptyEditorImageName} from 'util/ClassWithNullObjectPattern'
import type {EmptyArray}                                       from 'util/types/variables'

import {EMPTY_ARRAY} from 'util/emptyVariables'

/**
 * @singleton
 */
export class EmptyEditorImage
    implements EditorImage, ClassWithNullObjectPattern<EmptyEditorImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEditorImage

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(): EmptyArray {
        return EMPTY_ARRAY
    }

    public toString(): EmptyEditorImageName {
        return 'Empty editor image'
    }

}
