import type {EmptyCollectionHolder} from '@joookiwi/collection'

import type {EditorImage}                                      from 'core/entity/images/editor/EditorImage'
import type {ClassWithNullObjectPattern, EmptyEditorImageName} from 'util/ClassWithNullObjectPattern'

import {Empty} from 'util/emptyVariables'

import EMPTY_ARRAY =             Empty.EMPTY_ARRAY
import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

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

    public get(): EmptyCollectionHolder { return EMPTY_COLLECTION_HOLDER }
    public getFromTheme(): EmptyCollectionHolder { return EMPTY_COLLECTION_HOLDER }
    public getFromGameStyle(): EmptyCollectionHolder { return EMPTY_COLLECTION_HOLDER }
    public getFromTime(): EmptyCollectionHolder { return EMPTY_COLLECTION_HOLDER }

    public toString(): EmptyEditorImageName { return 'Empty editor image' }

}
