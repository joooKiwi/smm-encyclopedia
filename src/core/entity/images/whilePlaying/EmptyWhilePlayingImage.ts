import type {ClassWithNullObjectPattern, EmptyWhilePlayingImageName} from '../../../../util/ClassWithNullObjectPattern';
import type {WhilePlayingImage}                                      from './WhilePlayingImage';

import {EMPTY_ARRAY} from '../../../../util/emptyVariables';

/**
 * @singleton
 */
export class EmptyWhilePlayingImage
    implements WhilePlayingImage, ClassWithNullObjectPattern<EmptyWhilePlayingImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyWhilePlayingImage;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public get(): typeof EMPTY_ARRAY {
        return EMPTY_ARRAY;
    }

    public toString(): EmptyWhilePlayingImageName {
        return 'Empty "while playing" image';
    }

}
