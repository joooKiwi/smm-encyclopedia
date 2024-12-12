import type {EmptyCollectionHolder} from '@joookiwi/collection'

import type {EntityImage} from 'core/entity/images/EntityImage'

import {Empty} from 'util/emptyVariables'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

export class EmptyEntityImage
    implements EntityImage<never> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEntityImage

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly images = EMPTY_COLLECTION_HOLDER

    public get(): EmptyCollectionHolder { return EMPTY_COLLECTION_HOLDER }

}
