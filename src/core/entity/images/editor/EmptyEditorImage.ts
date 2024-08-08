import type {EditorImage}                                      from 'core/entity/images/editor/EditorImage'
import type {ClassWithNullObjectPattern, EmptyEditorImageName} from 'util/ClassWithNullObjectPattern'

import {EMPTY_ARRAY} from 'util/emptyVariables'

/** @singleton */
export class EmptyEditorImage
    implements EditorImage<never>,
        ClassWithNullObjectPattern<EmptyEditorImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEditorImage

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly images = EMPTY_ARRAY
    public readonly imagesWithAssociation = EMPTY_ARRAY

    public get(): EmptyArray { return EMPTY_ARRAY }
    public getFromTheme(): EmptyArray { return EMPTY_ARRAY }
    public getFromGameStyle(): EmptyArray { return EMPTY_ARRAY }
    public getFromTime(): EmptyArray { return EMPTY_ARRAY }

    public toString(): EmptyEditorImageName { return 'Empty editor image' }

}
