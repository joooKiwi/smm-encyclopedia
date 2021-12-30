import type {UnusedImage}                                      from './UnusedImage';
import type {ClassWithNullObjectPattern, EmptyUnusedImageName} from '../../../../util/ClassWithNullObjectPattern';

import {EMPTY_ARRAY} from '../../../../util/emptyVariables';

export class EmptyUnusedImage
    implements UnusedImage, ClassWithNullObjectPattern<EmptyUnusedImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyUnusedImage;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly all = EMPTY_ARRAY;

    public toString(): EmptyUnusedImageName {
        return 'Empty "unused" image';
    }

}