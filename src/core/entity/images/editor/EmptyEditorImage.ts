import type {EmptyCollectionHolder} from '@joookiwi/collection'

import type {EditorImage}                                      from 'core/entity/images/editor/EditorImage'
import type {ClassWithNullObjectPattern, EmptyEditorImageName} from 'util/ClassWithNullObjectPattern'

import {Empty} from 'util/emptyVariables'

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

    public readonly images = EMPTY_COLLECTION_HOLDER
    public readonly imagesWithAssociation = EMPTY_COLLECTION_HOLDER

    public get(): EmptyCollectionHolder { return EMPTY_COLLECTION_HOLDER }
    public getFromTheme(): EmptyCollectionHolder { return EMPTY_COLLECTION_HOLDER }
    public getFromGameStyle(): EmptyCollectionHolder { return EMPTY_COLLECTION_HOLDER }
    public getFromTime(): EmptyCollectionHolder { return EMPTY_COLLECTION_HOLDER }

    public getSmb(): EmptyCollectionHolder { return EMPTY_COLLECTION_HOLDER }
    public getSmb3(): EmptyCollectionHolder { return EMPTY_COLLECTION_HOLDER }
    public getSmw(): EmptyCollectionHolder { return EMPTY_COLLECTION_HOLDER }
    public getNsmbu(): EmptyCollectionHolder { return EMPTY_COLLECTION_HOLDER }
    public getSm3dw(): EmptyCollectionHolder { return EMPTY_COLLECTION_HOLDER }

    public toString(): EmptyEditorImageName { return 'Empty editor image' }

}
