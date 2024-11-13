import type {EntityImage} from 'core/entity/images/EntityImage'

import {Empty} from 'util/emptyVariables'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY

export class EmptyEntityImage
    implements EntityImage<never> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEntityImage

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly images = EMPTY_ARRAY

    public get(): EmptyArray { return EMPTY_ARRAY }

}
