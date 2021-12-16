import type {ClassWithNullObjectPattern, EmptyEditorImageName} from '../../../../util/ClassWithNullObjectPattern';
import type {Image}                                            from '../Image';

import {EMPTY_ARRAY} from '../../../../util/emptyVariables';

/**
 * @singleton
 */
export class EmptyEditorImage
    implements Image, ClassWithNullObjectPattern<EmptyEditorImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEditorImage;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public get(): typeof EMPTY_ARRAY {
        return EMPTY_ARRAY;
    }

    public toString(): EmptyEditorImageName {
        return 'Empty editor image';
    }

}
